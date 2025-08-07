
import Message from "./components/copy/Message";
import HomeButton from "./components/HomeButton";
import Background from "@/app/components/Background";
import CopyProvider from "./components/copy/Context";
import Contacts from "./components/Contacts";

export default function Connect() {

    const background = <div className="brightness-50"><Background blur/></div>

    return <CopyProvider>{background}<HomeButton/><Message/><Contacts/></CopyProvider>

}