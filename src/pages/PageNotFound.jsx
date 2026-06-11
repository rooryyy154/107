import { IconError404 } from "@tabler/icons-react"

function PageNotFound(){
    return(
        <div>
            <IconError404 size={100} color="green" />
            <h1>404 - Page Not Found</h1>
        </div>
    )
}

export default PageNotFound