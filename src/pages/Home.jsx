import { IconDeviceGamepad2 } from "@tabler/icons-react"


function Home(){
    return (
        <div className="bg-primary text-white text-center p-5 rounded">
            <h1>Welcome to GameZone!</h1>
            <h4>Here you will find the best games in the whole internet, you can also
                buy more than one copies if you want to share it with a friend.
            </h4>
            <IconDeviceGamepad2 size={100} color="white"/>
        </div>
    )
}

export default Home