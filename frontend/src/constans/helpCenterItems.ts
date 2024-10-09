import ContactQuestionIcon from '../assets/icons/contactquestion.png'
import ContactBoxIcon from '../assets/icons/contactbox.png'
import ContactLaptopIcon from '../assets/icons/contactlaptop.png'
import ContactPadlockIcon from '../assets/icons/contactpadlock.png'
import ContactReturnIcon from '../assets/icons/contactreturn.png'
import ContactPersonIcon from '../assets/icons/contactperson.png'

type helpCenterItemsType = {
    icon: any
    text: string
    questions: {
        question: string
        answer: string
    }[]
}[]

const helpCenterItems: helpCenterItemsType = [
    {
        icon: ContactQuestionIcon,
        text: 'Frequently asked',
        questions: [
            {
                question: 'How can I check the status of my order?',
                answer: 'You can check the status of your order by logging in to your account - in the Your orders tab.',
            },
            {
                question: 'Is the product I selected available?',
                answer: 'The availability of goods in showrooms and shipping warehouses can be checked directly on our website. Detailed information is available on the selected product card.',
            },
            {
                question: 'How can I report equipment failure?',
                answer: 'If the product you received is defective and the period of 15 days from purchase has not yet expired, please contact us at the following e-mail address serwis@nextpc.com.',
            },
            {
                question: 'There is an error on my invoice, how can I correct it?',
                answer: 'We can only correct minor errors on your invoice, for example typos in your company name or address.',
            },
        ],
    },
    {
        icon: ContactBoxIcon,
        text: 'Orders and delivery',
        questions: [
            {
                question: 'How to buy in installments?',
                answer: 'To learn how to make an installment purchase, visit the installments tab.',
            },
            {
                question: 'Will I receive a VAT invoice when purchasing in the x-kom store?',
                answer: 'If you buy by mail order, you will receive a VAT invoice by default.',
            },
            {
                question: 'How much time do I have to collect my order at a stationary store?',
                answer: 'You can collect your completed order within 3 business days.',
            },
            {
                question: 'Do we ship abroad?',
                answer: 'We currently only ship orders within Poland.',
            },
        ],
    },
    {
        icon: ContactLaptopIcon,
        text: 'Products',
        questions: [
            {
                question: 'To what extent is it possible to modify the equipment before purchase?',
                answer: 'The computers we currently sell can be modified for RAM expansions',
            },
            {
                question: 'Can I exchange a product from the promotional set for another one?',
                answer: 'Promotional sets with free products, e.g. tablet + memory card, cannot be modified for exchange.',
            },
            {
                question: 'Can I purchase goods that I cannot find in the offer?',
                answer: 'If the product you are interested in has not been found in our offer, please write to us at nextpc@nextpc.com - we will try to find a satisfactory solution.',
            },
            {
                question: 'Will I receive a media with drivers?',
                answer: 'Detailed information about the presence of such a carrier is available on the product card.',
            },
        ],
    },
    {
        icon: ContactPadlockIcon,
        text: 'Insurance',
        questions: [
            {
                question: 'How can I insure my goods?',
                answer: 'If you are interested, please contact us by phone from Monday to Friday, 8:00 a.m. - 6:00 p.m., by phone: 00 000 00 00 and by e-mail: nextpcsafe@nextpc.com',
            },
            {
                question: 'What equipment can I insure?',
                answer: 'Equipment over 100$, excluding devices from the following manufacturers: GoClever, Kiano, Lark, MyPhone, Prestigio, Overmax, NavRoad, Modecom.',
            },
            {
                question: 'What document will I receive as confirmation of purchasing insurance?',
                answer: 'The insurance policy confirms the conclusion of the equipment insurance contract.',
            },
            {
                question: 'When is the policy active?',
                answer: 'The insurance period starts from the date of conclusion of the Insurance Agreement.',
            },
            {
                question: 'How much time do I have to report damage?',
                answer: 'Up to 5 business days from the date of the event in the event of damage and up to 48 hours in the event of burglary or robbery.',
            },
        ],
    },
    {
        icon: ContactReturnIcon,
        text: 'Complaints and returns',
        questions: [
            {
                question: 'What is necessary to make a complaint?',
                answer: 'To effectively complain about the goods, prepare your proof of purchase and the warranty card if you received it with the product.',
            },
            {
                question: 'How to install drivers and where to download them?',
                answer: 'To find drivers, go to website and select the appropriate manufacturer from the list. You will be redirected to the website from which you can download drivers dedicated to your operating system.',
            },
            {
                question: 'Where can I find the hardware serial number and what does it look like?',
                answer: 'You will usually find the serial number on the back of the device or on the bottom of the device next to the barcode. The serial number is often preceded by the letters: "SN".',
            },
        ],
    },
    {
        icon: ContactPersonIcon,
        text: 'Contact and showrooms',
        questions: [
            {
                question:
                    'If I purchase online and collect it in person, am I also entitled to a return within 15 days?',
                answer: 'Yes, personal collection does not exclude the possibility of returning the purchased goods, provided that the purchase contract was concluded remotely.',
            },
            {
                question: 'Can another person pick up the order at the nextpc showroom?',
                answer: 'Of course it is possible. When placing an order, provide our consultant or enter the details of the receiving person in the order comments field also please remember to bring your ID with you.',
            },
            {
                question: 'Is the price of the equipment in the showroom the same as that given on the website?',
                answer: 'Yes, the website is the most up-to-date offer of our store network.',
            },
        ],
    },
]

export default helpCenterItems
