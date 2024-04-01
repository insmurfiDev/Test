function getMain() {
	return {
		isGrid: true,
		toggleGrid() {
			this.isGrid = !this.isGrid
		},
		setColor(color, task) {
			this.tasks.find(t => t.id === task.id).color = color
		},
		tasks: getTasks().tasks,
	}
}

function getCategories() {
	return {
		categories: [
			{
				title: 'Task',
				className: 'task',
				description: 'Up to 30 days',
				count: 7,
				active: true,
			},
			{
				title: 'Unassigned',
				className: 'unassigned',
				description: 'Draft folder',
				count: 2,
				active: false,
			},
			{
				title: 'Archive',
				className: 'archive',
				description: '31-60 days',
				count: 56,
				active: false,
			},
			{
				title: 'Almost gone',
				className: 'almost_gone',
				description: '61-90 days',
				count: 56,
				active: false,
			},
			{
				title: 'Deleted',
				className: 'deleted',
				description: 'Recently',
				count: 56,
				active: false,
			},
		],
	}
}
function getTasks() {
	return {
		tasks: [
			{
				id: 1,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'New',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
			{
				id: 2,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'Delivered',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
			{
				id: 3,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'New',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
			{
				id: 4,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'New',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
			{
				id: 5,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'New',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
			{
				id: 6,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'New',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
			{
				id: 7,
				title: '23454656657576uyw',
				description: '2009 BMW X5',
				users: 'Jake (+1)',
				category: 'Unassigned',
				photos: 9,
				count: 2,
				date: '7 Oct 2023',
				time: '10:35 PM',
				color: false,
			},
		],
	}
}

function getColors() {
	return {
		colors: [
			'#01C7FC',
			'#5E30EB',
			'#9F19D4',
			'#FF73E0',
			'#FECB3E',
			'#96D35F',
			'#64350A',
			'#E5194A',
			'#FB791B',
		],
	}
}
