declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"author": {
"tokunaga.md": {
	id: "tokunaga.md";
  slug: "tokunaga";
  body: string;
  collection: "author";
  data: InferEntrySchema<"author">
} & { render(): Render[".md"] };
};
"blog": {
"20231231.md": {
	id: "20231231.md";
  slug: "20231231";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240102.md": {
	id: "20240102.md";
  slug: "20240102";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240107.md": {
	id: "20240107.md";
  slug: "20240107";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240110.md": {
	id: "20240110.md";
  slug: "20240110";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240112.md": {
	id: "20240112.md";
  slug: "20240112";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240113.md": {
	id: "20240113.md";
  slug: "20240113";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240114.md": {
	id: "20240114.md";
  slug: "20240114";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240124.md": {
	id: "20240124.md";
  slug: "20240124";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240131.md": {
	id: "20240131.md";
  slug: "20240131";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240206.md": {
	id: "20240206.md";
  slug: "20240206";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240213.md": {
	id: "20240213.md";
  slug: "20240213";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"20240228.md": {
	id: "20240228.md";
  slug: "20240228";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"first-post.md": {
	id: "first-post.md";
  slug: "first-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"topic": {
"0_welcome.md": {
	id: "0_welcome.md";
  slug: "0_welcome";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"1_bevy.md": {
	id: "1_bevy.md";
  slug: "1_bevy";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"1a_dharma.md": {
	id: "1a_dharma.md";
  slug: "1a_dharma";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"1b_chimera.md": {
	id: "1b_chimera.md";
  slug: "1b_chimera";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"2_linux.md": {
	id: "2_linux.md";
  slug: "2_linux";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"3_rust.md": {
	id: "3_rust.md";
  slug: "3_rust";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"4_remix.md": {
	id: "4_remix.md";
  slug: "4_remix";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"5_git.md": {
	id: "5_git.md";
  slug: "5_git";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"6_test.md": {
	id: "6_test.md";
  slug: "6_test";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
"9_others.md": {
	id: "9_others.md";
  slug: "9_others";
  body: string;
  collection: "topic";
  data: InferEntrySchema<"topic">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"layouts": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
