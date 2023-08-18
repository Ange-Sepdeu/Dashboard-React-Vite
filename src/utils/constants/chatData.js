import { currentTime } from "../scripts/script"

export const userContacts = [
    {
        id: 1,
        name: "Theresa D.N.T",
        image: "../src/assets/bg1.jpg",
        unReadMessages: 0,
        conversation: [
            {
                sender_id: 3,
                receiver_id: 1,
                message: "Hey Theresa D.N.T",
                time: currentTime(),
            },
            {
                sender_id: 1,
                receiver_id: 3,
                message: "How are you, Chris",
                time: currentTime(),
            },
            {
                sender_id: 1,
                receiver_id: 3,
                message: "Ok, see you later",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 2,
        name: "Junie Tamto",
        image: "../src/assets/studies.png",
        unReadMessages: 5,
        conversation: [
            {
                sender_id: 3,
                receiver_id: 2,
                message: "Hey Tamto",
                time: currentTime(),
            },
            {
                sender_id: 2,
                receiver_id: 3,
                message: "Tu es en retard",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 2,
                message: "Je ne pense pas",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 3,
        name: "Test Chris",
        image: "../src/assets/CO.png",
        unReadMessages: 3,
        conversation: [
            {
                sender_id: 3,
                receiver_id: 3,
                message: "Hey Kameni",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 3,
                message: "On dit quoi, grand ?",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 3,
                message: "Les nerfs",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 4,
        name: "Ivan L",
        image: "../src/assets/statistics.png",
        unReadMessages: 3,
        conversation: [
            {
                sender_id: 4,
                receiver_id: 3,
                message: "Hey Kameni",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 4,
                message: "On dit quoi, grand ?",
                time: currentTime(),
            },
            {
                sender_id: 4,
                receiver_id: 3,
                message: "Viens avec les clefs",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 5,
        name: "Sandra IAI",
        image: "../src/assets/news.png",
        unReadMessages: 5,
        conversation: [
            {
                sender_id: 5,
                receiver_id: 3,
                message: "Comment nor, boss ?",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 5,
                message: "Je suis la non tantine",
                time: currentTime(),
            },
            {
                sender_id: 5,
                receiver_id: 3,
                message: "24/25",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 6,
        name: "Percy T",
        image: "../src/assets/games.png",
        unReadMessages: 5,
        conversation: [
            {
                sender_id: 3,
                receiver_id: 6,
                message: "Yo bro",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 6,
                message: "Tu veux quel genre de work",
                time: currentTime(),
            },
            {
                sender_id: 6,
                receiver_id: 3,
                message: "UI/UX Design",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 7,
        name: "Mbah Royce",
        image: "../src/assets/profile.png",
        unReadMessages: 5,
        conversation: [
            {
                sender_id: 3,
                receiver_id: 7,
                message: "Good morning sir",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 7,
                message: "Any updates on my report ?",
                time: currentTime(),
            },
            {
                sender_id: 7,
                receiver_id: 3,
                message: "Correct the following in your reports",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 8,
        name: "Tanue Monette",
        image: "../src/assets/tips.jpg",
        unReadMessages: 5,
        conversation: [
            {
                sender_id: 8,
                receiver_id: 3,
                message: "See the modifications",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 8,
                message: "Ok sir",
                time: currentTime(),
            },
            {
                sender_id: 8,
                receiver_id: 3,
                message: "Add a blue background to this page",
                time: currentTime(),
            },        
        ]
    },
    {
        id: 9,
        name: "Derick Asane",
        image: "../src/assets/water.png",
        unReadMessages: 5,
        conversation: [
            {
                sender_id: 3,
                receiver_id: 9,
                message: "Good evening Derick",
                time: currentTime(),
            },
            {
                sender_id: 9,
                receiver_id: 3,
                message: "How are you doing ?",
                time: currentTime(),
            },
            {
                sender_id: 3,
                receiver_id: 9,
                message: "I have a small problem",
                time: currentTime(),
            },        
        ]
    },
]