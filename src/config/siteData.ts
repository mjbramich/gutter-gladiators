export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean;
	useAnimations?: boolean;
	contact: {
		// used for contact page and footer
		address1: string; // contact address (line 1)
		phone: string; // contact phone number
		email: string; // contact email address
	};
	author: {
		// used for blog post purposes
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: 'Gutter Gladiators',
	// Your website's title and description (meta fields)
	title: 'Gutter Gladiators - a playful small business theme crafted with Astro and Tailwind CSS',
	description:
		'Create a fun website for your small business clients with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.',
	useViewTransitions: true,
	useAnimations: true,

	// used on contact page and footer
	contact: {
		address1: 'Devonport, TAS',
		phone: '0400 000 000',
		email: 'jackson@guttergladiators.com.au'
	},

	// Your information for blog post purposes
	author: {
		name: 'Jackson Walsh',
		email: 'jackson@guttergladiators.com',
		twitter: 'Cosmic_Themes'
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: '/gglogo.png',
		alt: 'Gutter Gladiators Logo'
	}
};

export default siteData;
