
import Contacts from "./components/Contacts";
import HomeButton from "./components/HomeButton";

import Message from "./components/copy/Message";
import { CopyProvider } from "./components/copy/Context";

export default function Connect() {

    return <CopyProvider><HomeButton/><Message/><Contacts/></CopyProvider>

}