// Eventually, I'd like to host this as json somewhere, for now, export the app data as a js object.
export const data = {
	// Themes
	"app-themes": [
		{
			id: 1,
			name: "default-light",
			base: 'light',
			isDefault: true,
		},
		{
			id: 2,
			name: "default-dark",
			base: 'dark',
			isDefault: false,
		},
	],
	// Layouts
	"app-layouts": [
		{
			id: 1,
			name: "top-push-nav",
			isDefault: false,
		},
		{
			id: 2,
			name: "right-push-nav",
			isDefault: false,
		},
		{
			id: 3,
			name: "bottom-push-nav",
			isDefault: false,
		},
		{
			id: 4,
			name: "left-push-nav",
			isDefault: true,
		},
	],
	// Visual Settings
	"app-spacing-options": [
		{
			id: 1,
			name: "compact",
			isDefault: false,
		},
		{
			id: 2,
			name: "default",
			isDefault: true,
		},
		{
			id: 3,
			name: "spacious",
			isDefault: false,
		},
	],
	"app-text-sizes": [
		{
			id: 1,
			name: "smaller",
			isDefault: false,
		},
		{
			id: 2,
			name: "default",
			isDefault: true,
		},
		{
			id: 3,
			name: "larger",
			isDefault: false,
		},
	],
};
