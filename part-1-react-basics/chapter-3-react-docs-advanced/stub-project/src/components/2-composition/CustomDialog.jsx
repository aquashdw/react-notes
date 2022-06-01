import Dialog from "./Dialog";

export default function CustomDialog({ title, description }){
     return <Dialog>
         <h1>{title}</h1>
         <h5>{description}</h5>
     </Dialog>
}