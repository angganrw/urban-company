import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface IServiceAsset {
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

export interface TypeServicesFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
  icon?: EntryFieldTypes.AssetLink;
}

export type TypeServicesSkeleton = EntrySkeletonType<
  TypeServicesFields,
  "services"
>;
export type TypeServices<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeServicesSkeleton, Modifiers, Locales>;
