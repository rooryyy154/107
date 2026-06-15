import { IconError404 } from "@tabler/icons-react"

function PageNotFound(){
    return(
        <div className="bg-primary text-white text-center p-5 rounded">
            <IconError404 size={100} color="white" />
            <h1>404 - Page Not Found</h1>
        </div>
    )
}

export default PageNotFound