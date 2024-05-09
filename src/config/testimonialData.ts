import girl1 from '@images/gglogo.png';
import BowTiedFocus from '@images/gutters-metal-roof.jpg';
import TravisB from '@images/ute.jpg';

export interface TestimonialItem {
	avatar: ImageMetadata; // an imported image
	name: string;
	title: string;
	testimonial: string;
}

const testimonialData: TestimonialItem[] = [
	{
		avatar: girl1,
		name: 'Caitlin',
		title: 'Client',
		testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      `
	},
	{
		avatar: BowTiedFocus,
		name: 'BowTiedFocus',
		title: 'Frontend Engineer',
		testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. 
        `
	},
	{
		avatar: TravisB,
		name: 'Travis B',
		title: 'Developer',
		testimonial: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. 
        `
	}
];

export default testimonialData;
