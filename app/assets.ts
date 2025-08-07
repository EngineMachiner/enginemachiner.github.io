
import { join } from "path";            import dirTree from "directory-tree"

function tree( path: string ) { path = join( "public/", path );       return dirTree(path) }

const assetsTree = {
    
    loadingIcons: tree("loading"),           art: tree("art"),          emojis: tree("emojis"),
    
    connect: tree("connect")

}

export default assetsTree