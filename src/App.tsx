import Listener from "./components/Listener"
import Waveform from "./components/Waveform.jsx"
import MenuBar from "./components/MenuBar"
import { Alert } from "@suid/material"
import { Show } from "solid-js"
import ChatGpt, { ask } from "./components/ChatGpt"

function HireMe() {
	return (
		<>
			Hire me{" "}
			<a href="https://chadsteele.com" target="chadsteele">
				chadsteele.com
			</a>
		</>
	)
}

export default function App() {
	return (
		<>
			<MenuBar />
			<ChatGpt />
			<Listener />
			<Waveform />
			<HireMe />
		</>
	)
}