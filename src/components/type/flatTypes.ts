export interface FlatPhoto {
  id: string;
  imageUrl: string;
  flatId: string;
}

export interface Flat {
  // data: Flat;
  id: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  flatPhotos: FlatPhoto[];
  createdAt: string;
  updatedAt: string;
}

export interface FlatModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  flat: Flat | null;
}

export interface TFlat {
  id: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  flatPhotos: FlatPhoto[];
  createdAt: string;
  updatedAt: string;
}

export interface TableRowProps {
  flats: TFlat[];
}
