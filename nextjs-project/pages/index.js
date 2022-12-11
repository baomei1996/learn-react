import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format",
        address: "Some Address 5, 12345 Some City",
        decription: "This is a first meetup!"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format",
        address: "Some Address 5, 12345 Some City",
        decription: "This is a second meetup!"
    },
] 

function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    // fetch data from an API

    return {
        props: {
            meetups: DUMMY_MEETUPS;
        }
    }
}

// export async function getStaticProps() {
//     // fetch data from an API
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// };

export default HomePage;