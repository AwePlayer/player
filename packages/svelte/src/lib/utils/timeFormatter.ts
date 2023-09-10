function timeFormatter(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

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
