import Modal from "./Modal";

export default function ThankYouModal(){
    return <Modal
        // title="Thank You"
        title={<h2>Thank You</h2>}
        description="It is nice to meet you"
        button="close"
    />;
}