import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Matthew",
    body: "The chicken was so juicy, and the rice was perfectly fragrant. A must-try!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Lauren",
    body: "That homemade chili sauce? Absolute perfection.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "James",
    body: "This is hands-down the best chicken rice I’ve ever tasted. Each bite takes me back to Asia",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Amanda",
    body: "The flavors were so authentic, and the cucumber slices added a refreshing touch.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Leia",
    body: "Perfect balance of tender chicken and flavorful rice. I’ll definitely order again!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Ian",
    body: "This is my 7th time ordering from Nicki.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",

      
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
		<div id="testimonials" className='flex flex-col justify-center items-center py-12'>
      <h2 className="text-6xl font-bold text-center mt-8 font-quintessential tracking-wider">See what others said!</h2>
			<div className=" flex h-[350px] w-full flex-col items-center justify-center max-w-5xl overflow-hidden bg-background">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.name} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map((review) => (
						<ReviewCard key={review.name} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>

		</div>
  );
}
