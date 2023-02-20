import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta title="" content="" />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const username = encodeURIComponent("cody-husek");
  const password = encodeURIComponent("ty765rzN/Q6xAxgolf");

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.2rdgk.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const username = encodeURIComponent("cody-husek");
  const password = encodeURIComponent("ty765rzN/Q6xAxgolf");

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.2rdgk.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const objId = new ObjectId(meetupId);

  const selectedMeetup = await meetupsCollection.findOne({
    _id: objId,
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
