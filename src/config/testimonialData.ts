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
		name: 'Shane',
		title: 'Client',
		testimonial: `Rain just started, a few hours after todays clean. 
		Happy now gutters are free flowing again.
		Great work & great guy. 
		I thoroughly recommend.
      `
	},
	{
		avatar: BowTiedFocus,
		name: 'Tim',
		title: 'Client',
		testimonial: `Jackson done a awesome job on all our properties. I can't recommend him enough.`
	},
	{
		avatar: TravisB,
		name: 'Lisa',
		title: 'Client',
		testimonial: `Gutter Gladiators went above and beyond! Their team was efficient, friendly, and did an excellent job clearing out my gutters. Couldn't be happier with their service! 
        `
	}
];

export default testimonialData;
