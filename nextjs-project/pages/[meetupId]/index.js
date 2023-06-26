import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail image="https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format"
            title="A First Meetup" address="Some Street 5, Some City" description="The Meetup description"/>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: {
                meetupId: 'm1'
            } }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
            }
        }
    }
}

export default MeetupDetails