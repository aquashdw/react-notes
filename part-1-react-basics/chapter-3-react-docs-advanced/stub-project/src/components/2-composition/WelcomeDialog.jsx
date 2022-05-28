import Dialog from "./Dialog";
import CustomDialog from "./CustomDialog";

export default function WelcomeDialog() {
    return <CustomDialog title="Welcome!" description="Thank you." />;
    // return <Dialog>
    //     <h1 style={{ backgroundColor: "dodgerblue" }}>Welcome!</h1>
    //     <h5>Thank you.</h5>
    // </Dialog>;
}
