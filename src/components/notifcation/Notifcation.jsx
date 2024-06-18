import "./Notifcation.css"

const Notifcation = ({ icon, iconColor, content }) => {
    return (
        <div className="bg-red-500 w-80 bg-background-elm2 animation-notif text-white rounded-2xl flex items-center justify-between absolute top-10 right-[50%] p-2">
            <img src="src/assets/radical-logo-white.png" className="w-12 h-12" alt="notif logo" />
            <h5>{content}</h5>
            <i class={`fa-solid fa-circle-${icon} text-${iconColor}-500 text-2xl`}></i>
        </div>
    );
}

export default Notifcation;