import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import LandingComponent from '@/components/landing/LandingComponent'

function HomePage(props: any) {
  return (
    <Fragment>
      <Head>
        <title>TeeFindr</title>
        <meta name="Booking Software" content="!Finally, booking software done right. TeeFindr is a real-time booking management tool for golf courses and simulators." />
      </Head>
			<LandingComponent />
    </Fragment>
  );
}

// export async function getStaticProps() {
//   // this code will never end up on the client side
//   // created at build time

//   const username = encodeURIComponent("cody-husek");
//   const password = encodeURIComponent("ty765rzN/Q6xAxgolf");

//   const client = await MongoClient.connect(
//     `mongodb+srv://${username}:${password}@cluster0.2rdgk.mongodb.net/?retryWrites=true&w=majority`
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//     revalidate: 10,
//   };
// }

// export async function getServerSideProps(context: any) {

// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	}
// }

export default HomePage;
