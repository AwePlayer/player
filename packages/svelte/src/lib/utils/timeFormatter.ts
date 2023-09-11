function timeFormatter(seconds: number): string {
	let roundedSeconds = Math.round(seconds);

	const hours = Math.floor(roundedSeconds / 3600);
	const minutes = Math.floor((roundedSeconds % 3600) / 60);
	const remainingSeconds = roundedSeconds % 60;

	if (hours > 0) {
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
			2,
			'0',
		)}:${String(remainingSeconds).padStart(2, '0')}`;
	} else {
		return `${String(minutes).padStart(2, '0')}:${String(
			remainingSeconds,
		).padStart(2, '0')}`;
	}
}

export default timeFormatter;
