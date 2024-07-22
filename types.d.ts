interface ErrorPagesProps {
  error: Error & { digest?: string };
  reset: () => void;
}

type ProductType = {
  id: string;

  title: string;

  description: string;

  price: number;

  variants: VariantType[];

  image: string;

  quantity: number;

  handle: string;

  tags: string;
};


type collections = {
  id: number
  title: string
  handle: string
}