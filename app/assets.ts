
import { join } from "path";            import dirTree from "directory-tree"
import { Directory } from "./util";

export type Assets = Record< string, Directory >

function directory( path: string ): Directory { path = join( "public/", path );       return dirTree(path) }

const assets: Assets = {
    
    loadingIcons: directory("loading"),           art: directory("art"),          emojis: directory("emojis"),
    connect: directory("connect")

}

export default assets