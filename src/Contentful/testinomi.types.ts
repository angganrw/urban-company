import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface ITestiAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType: string;
    };
  };
}

export interface TypeTestimonialsFields {
  name: EntryFieldTypes.Symbol;
  jobs: EntryFieldTypes.Symbol;
  text: EntryFieldTypes.Text;
  imgUrl?: EntryFieldTypes.AssetLink;
  rating?: EntryFieldTypes.Integer;
}

export type TypeTestimonialsSkeleton = EntrySkeletonType<
  TypeTestimonialsFields,
  "testimonials"
>;
export type TypeTestimonials<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTestimonialsSkeleton, Modifiers, Locales>;
