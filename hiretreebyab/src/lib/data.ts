import {addDoc,collection,deleteDoc,doc,getDoc,getDocs,limit,query,setDoc,updateDoc,where,type DocumentData,type QuerySnapshot} from "firebase/firestore";
import type {User as FirebaseUser} from "firebase/auth";
import {db} from "./firebase";
export const C={users:"hiretreebyab_users",posts:"hiretreebyab_posts",likes:"hiretreebyab_likes",comments:"hiretreebyab_comments",connections:"hiretreebyab_connections",follows:"hiretreebyab_follows",bookmarks:"hiretreebyab_bookmarks",jobs:"hiretreebyab_jobs",applications:"hiretreebyab_job_applications",messages:"hiretreebyab_messages",groups:"hiretreebyab_groups",groupMembers:"hiretreebyab_group_members",events:"hiretreebyab_events",attendees:"hiretreebyab_event_attendees",notifications:"hiretreebyab_notifications",guidance:"hiretreebyab_guidance_bookings",reports:"hiretreebyab_reports"} as const;
export type Profile={id:string;name:string;headline:string;location:string;about:string;skills:string;createdAt:number};
export type Person=Profile&{relationshipState:"none"|"sent"|"received"|"connected";isFollowing:boolean};
export type Post={id:string;userId:string;body:string;createdAt:number;authorName:string;authorHeadline:string;authorLocation:string;likesCount:number;liked:boolean;saved:boolean;commentsCount:number};
export type Comment={id:string;postId:string;userId:string;body:string;createdAt:number;authorName:string;authorHeadline:string};
export type Connection={id:string;requesterId:string;receiverId:string;status:"pending"|"accepted"|"declined";createdAt:number};
export type Job={id:string;ownerId:string;title:string;company:string;location:string;employmentType:string;description:string;createdAt:number;ownerName:string;applicationsCount:number;applied:boolean};
export type Application={id:string;jobId:string;userId:string;coverNote:string;status:string;createdAt:number;applicantName?:string;headline?:string;location?:string};
export type Message={id:string;connectionId:string;senderId:string;recipientId:string;body:string;createdAt:number;senderName:string};
export type Group={id:string;ownerId:string;name:string;description:string;category:string;createdAt:number;ownerName:string;memberCount:number;joined:boolean};
export type EventItem={id:string;ownerId:string;title:string;description:string;location:string;startsAt:number;endsAt:number;eventType:string;createdAt:number;ownerName:string;attendeeCount:number;attendanceStatus:"none"|"going"|"interested"};
export type Notification={id:string;recipientId:string;actorId:string;actorName:string;kind:string;entityType:string;entityId:string;message:string;isRead:boolean;createdAt:number};
export type Booking={id:string;userId:string;topic:string;goal:string;preferredSlot:string;feeInr:number;status:string;createdAt:number};
export type Dashboard={user:Profile;people:Person[];posts:Post[];connections:Connection[];jobs:Job[];applications:Application[];messages:Message[];groups:Group[];events:EventItem[];notifications:Notification[];bookings:Booking[];savedPosts:Post[];comments:Comment[];members:Profile[];unreadNotifications:number};
function store(){if(!db)throw new Error("Firebase is not configured. Add the NEXT_PUBLIC_FIREBASE values in Vercel.");return db;}
function unpack<T>(s:QuerySnapshot<DocumentData>):T[]{return s.docs.map(d=>({...d.data(),id:d.id}) as T);}
async function all<T>(n:string,max=250):Promise<T[]>{return unpack<T>(await getDocs(query(collection(store(),n),limit(max))));}
async function by<T>(n:string,field:string,value:string,max=500):Promise<T[]>{return unpack<T>(await getDocs(query(collection(store(),n),where(field,"==",value),limit(max))));}
const newest=<T extends {createdAt?:number}>(a:T[])=>[...a].sort((x,y)=>Number(y.createdAt||0)-Number(x.createdAt||0));
export const pairId=(a:string,b:string)=>[a,b].sort().join("__");
export async function ensureProfile(u:FirebaseUser){const r=doc(store(),C.users,u.uid),s=await getDoc(r);if(!s.exists())await setDoc(r,{name:u.displayName||u.email?.split("@")[0]||"New member",headline:"Open to meaningful opportunities",location:"",about:"",skills:"",createdAt:Date.now()});}
export async function createRecord(name:string,data:DocumentData){const r=await addDoc(collection(store(),name),{...data,createdAt:Date.now()});return r.id;}
export async function postNotice(n:{recipientId:string;actorId:string;actorName:string;kind:string;entityType:string;entityId:string;message:string}){if(n.recipientId!==n.actorId)await createRecord(C.notifications,{...n,isRead:false});}
export async function loadApplicants(jobId:string){return by<Application>(C.applications,"jobId",jobId,300);}
export async function loadDashboard(u:FirebaseUser):Promise<Dashboard>{
 const d=store();await ensureProfile(u);
 const [ownSnap,members,postsRaw,connections,follows,likes,commentsRaw,bookmarks,jobsRaw,apps,sent,received,groupsRaw,groupMembers,eventsRaw,attendees,noticeRaw,bookings]=await Promise.all([
 getDoc(doc(d,C.users,u.uid)),all<Profile>(C.users,500),all<{id:string;userId:string;body:string;createdAt:number}>(C.posts,200),all<Connection>(C.connections,1500),
 all<{id:string;followerId:string;followedId:string}>(C.follows,3000),all<{id:string;postId:string;userId:string}>(C.likes,5000),
 all<{id:string;postId:string;userId:string;body:string;createdAt:number}>(C.comments,5000),by<{id:string;postId:string;userId:string;createdAt:number}>(C.bookmarks,"userId",u.uid),
 all<Job>(C.jobs,300),by<Application>(C.applications,"userId",u.uid),by<Message>(C.messages,"senderId",u.uid),by<Message>(C.messages,"recipientId",u.uid),
 all<Group>(C.groups,300),all<{id:string;groupId:string;userId:string;role:string}>(C.groupMembers,5000),all<EventItem>(C.events,300),
 all<{id:string;eventId:string;userId:string;status:string}>(C.attendees,5000),by<Notification>(C.notifications,"recipientId",u.uid),by<Booking>(C.guidance,"userId",u.uid,200)]);
 const own={...(ownSnap.data()||{}),id:u.uid} as Profile,memberList=members.filter(m=>m.id!==u.uid),memberMap=new Map(memberList.map(m=>[m.id,m]));memberMap.set(own.id,own);
 const people:Person[]=memberList.map(p=>{const c=connections.find(x=>(x.requesterId===own.id&&x.receiverId===p.id)||(x.requesterId===p.id&&x.receiverId===own.id));const relationshipState=c?.status==="accepted"?"connected":c?.status==="pending"&&c.requesterId===own.id?"sent":c?.status==="pending"&&c.receiverId===own.id?"received":"none";return {...p,relationshipState,isFollowing:follows.some(f=>f.followerId===own.id&&f.followedId===p.id)};}).sort((a,b)=>a.name.localeCompare(b.name));
 const posts=newest(postsRaw).map(p=>{const a=memberMap.get(p.userId);return {...p,authorName:a?.name||"Member",authorHeadline:a?.headline||"Professional member",authorLocation:a?.location||"",likesCount:likes.filter(l=>l.postId===p.id).length,liked:likes.some(l=>l.postId===p.id&&l.userId===own.id),saved:bookmarks.some(b=>b.postId===p.id&&b.userId===own.id),commentsCount:commentsRaw.filter(c=>c.postId===p.id).length};});
 const jobs:Job[]=newest(jobsRaw).map(j=>({...j,ownerName:memberMap.get(j.ownerId)?.name||"Member",applicationsCount:Number(j.applicationsCount||0),applied:apps.some(a=>a.jobId===j.id)}));
 const groups:Group[]=newest(groupsRaw).map(g=>({...g,ownerName:memberMap.get(g.ownerId)?.name||"Member",memberCount:groupMembers.filter(m=>m.groupId===g.id).length,joined:groupMembers.some(m=>m.groupId===g.id&&m.userId===own.id)}));
 const events:EventItem[]=eventsRaw.slice().sort((a,b)=>a.startsAt-b.startsAt).map(e=>({...e,ownerName:memberMap.get(e.ownerId)?.name||"Member",attendeeCount:attendees.filter(a=>a.eventId===e.id&&a.status==="going").length,attendanceStatus:(attendees.find(a=>a.eventId===e.id&&a.userId===own.id)?.status||"none") as EventItem["attendanceStatus"]}));
 const notifications=newest(noticeRaw).map(n=>({...n,actorName:memberMap.get(n.actorId)?.name||n.actorName||"A member"}));
 const messages=[...new Map([...sent,...received].map(m=>[m.id,m])).values()].sort((a,b)=>a.createdAt-b.createdAt).map(m=>({...m,senderName:memberMap.get(m.senderId)?.name||"Member"}));
 const commentItems:Comment[]=newest(commentsRaw).map(c=>({...c,authorName:memberMap.get(c.userId)?.name||"Member",authorHeadline:memberMap.get(c.userId)?.headline||""}));
 const savedPosts=posts.filter(p=>bookmarks.some(b=>b.postId===p.id&&b.userId===own.id));
 return {user:own,people,posts,connections,jobs,applications:apps,messages,groups,events,notifications,bookings:newest(bookings),savedPosts,comments:commentItems,members:memberList,unreadNotifications:notifications.filter(n=>!n.isRead).length};
}
