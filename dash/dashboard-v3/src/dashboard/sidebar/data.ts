import HomeIcon from './icons/HomeIcon.svelte';
import TasksIcon from './icons/TasksIcon.svelte';
import ReportsIcon from './icons/ReportsIcon.svelte';
import SettingsIcon from './icons/SettingsIcon.svelte';
import CalendarIcon from './icons/CalendarIcon.svelte';
import ProjectsIcon from './icons/ProjectsIcon.svelte';
import TimeManageIcon from './icons/TimeManage.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		title: 'Dashboard',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'Projects',
		icon: ProjectsIcon,
		link: '/admin/projects'
	},
	{
		title: 'My tasks',
		icon: TasksIcon,
		link: '/admin/tasks'
	},
	{
		title: 'Calendar',
		icon: CalendarIcon,
		link: '/admin/calendar'
	},
	{
		title: 'Time manage',
		icon: TimeManageIcon,
		link: '/admin/time-manage'
	},
	{
		title: 'Reports',
		icon: ReportsIcon,
		link: '/admin/reports'
	},
	{
		title: 'Settings',
		icon: SettingsIcon,
		link: '/admin/settings'
	},
	{
		title: 'Documentation',
		icon: DocumentationIcon,
		link: '/admin/documentation'
	}
];
