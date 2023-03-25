import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import { useState } from "react";

export default function Chat() {

	const user = {
		name: 'YalımGürbüz',
		avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
	}

	const [messages, setMessages] = useState([
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'YalımGürbüz',
				username: 'YalımGürbüz',
				avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321350126_1615166852266811_6208785799584419506_n.jpg?ccb=11-4&oh=01_AdSQqsvoMRBy0ShYiugIOHyFR2VD_ZXS9LQbZDTwM1b0Pw&oe=642BC77F'
			},
			message: 'YalımGürbüz'
		},
	])

	return (
		<div className="flex-1">
			<Header user={user} />
			<Messages messages={messages} />
			<Reply setMessages={setMessages} />
		</div>
	)
}
