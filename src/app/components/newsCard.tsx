import Image from "next/image";

export default function NewsCard({ vertical, imagePosition, image, title, description }: { vertical: boolean, imagePosition: string, image: string, title: string, description: string }) {
  return (
    <div className={`flex ${vertical ? 'flex-row w-[700px]' : 'flex-col w-[500px] h-[600px]'} border border-1 border-gray-800 p-1`}>
      {vertical ? (
        <div className="flex w-full">
          {imagePosition === 'left' ? (
            <><div className="w-1/2 mr-2 relative">
              <Image
                src={image}
                alt="News image"
                layout="fill"
                objectFit="cover" />
            </div><div className="w-1/2 p-3 flex flex-col gap-4" style={{ backgroundColor: "var(--news-card-background)" }}>
                <div>
                  <h3>NEWS</h3>
                  <h2>{title}</h2>
                </div>
                <h5 className="text-justify" dangerouslySetInnerHTML={{ __html: description }} />
              </div></>
          ) : (
            <><div className="w-1/2 p-3 flex flex-col gap-4" style={{ backgroundColor: "var(--news-card-background)" }}>
                <div>
                  <h3>NEWS</h3>
                  <h2>{title}</h2>
                </div>
                <h5 className="text-justify" dangerouslySetInnerHTML={{ __html: description }} />
              </div><div className="w-1/2 mr-2 relative">
                  <Image
                    src={image}
                    alt="News image"
                    layout="fill"
                    objectFit="cover" />
                </div></>
          )}
        </div>
      ) : (
        <>
          <div className="relative w-full h-2/3 mb-2">
            <Image
              src={image}
              alt="News image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-1/3 p-2 flex flex-col gap-4" style={{ backgroundColor: "var(--news-card-background)" }}>
            <div>
              <h3>NEWS</h3>
              <h2>{title}</h2>
            </div>
            <h5 className="text-justify" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </>
      )}
    </div>
  );
};