import { correctTime } from "../scripts/script"

export const defaultMsg = [{
    sender_id: -1,
    receiver_id: 3,
    time: correctTime(),
    message: "Hello I'm K~SAC Bot"
}]

export const botData = [
    {
        time: correctTime(),
        sentence: "Hello",
        response: "How may I help you ?"
    },
    {
        time: correctTime(),
        sentence: "I need an advice on something",
        response: "What if I may ask ?"
    },
    {
        time: correctTime(),
        sentence: "Report",
        response: "Sorry I can't help you"
    },
    {
        time: correctTime(),
        sentence: "Thank you",
        response: "Good day, hope I was of great help"
    },
    {
        time: correctTime(),
        sentence: "Nope",
        response: "Sorry <i style='color:orange;' class='fa fa-frown-o'></i>"
    }
]

