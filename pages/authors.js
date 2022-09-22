import Image from "next/image";

const authors = () => {
  return (
    <>
      <h1 className="page-title">Meet The Authors</h1>
      <div className="author-div">
        <Image
          src="/../public/images/TomPhoto.png"
          alt="Lead Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="top"
          layout="fixed"
          placeholder="blur"
          blurDataURL="/../public/images/TomPhoto.png"
          style={{ borderRadius: "50%" }}
        />
        <p>
          Dr. Tom Cervone is a deacon at Holy Redeemer Catholic Church in
          Evansville, Indiana with 50 years of experience in ecology. He
          graduated from St. Bonaventure University, a Franciscan University.
        </p>
      </div>
      <div className="author-div">
        <Image
          src="/../public/images/MaureenPhoto.JPG"
          alt="Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="center"
          layout="fixed"
          placeholder="blur"
          blurDataURL="/../public/images/MaureenPhoto.JPG"
          style={{
            borderRadius: "50%",
          }}
        />
        <p>
          Sister Maureen Houlihan, D.C. is a support sister on the Seton Harvest
          Farm started by the Daughters of Charity in response to the
          Communities - Care of Mother Earth. This CSA (Community Supported
          Agriculture) Farm grows all natural produce for shareholders and the
          poor.
        </p>
      </div>
      <div className="author-div">
        <Image
          src="/../public/images/Tim-Lilley-HS.jpg"
          alt="Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="top"
          layout="fixed"
          placeholder="blur"
          blurDataURL="/../public/images/Tim-Lilley-HS.jpg"
          style={{ borderRadius: "50%" }}
        />
        <p>
          Tim Lilley is the director of communications for the Diocese of
          Evansville and editor of The Message. He has edited each of these
          articles in Our Mother Earth. In addition, he publishes articles every
          other week, many of which can be found
          <a href="https://evdiomessage.org/columns/"> here</a>.
        </p>
      </div>
      <div className="author-div">
        <Image
          src="/../public/images/NicolePhoto.png"
          alt="Author of Our Mother Earth Articles"
          width="250px"
          height="250px"
          objectFit="cover"
          objectPosition="50% 20%"
          layout="fixed"
          placeholder="blur"
          blurDataURL="/../public/images/NicolePhoto.png"
          style={{
            borderRadius: "50%",
          }}
        />
        <p>
          Nicole Cervone-Gish, Ed. MS. is an award winning ELL (English Language
          Learner) teacher, who lives in Evansville, Indiana with her family.
        </p>
      </div>
    </>
  );
};

export default authors;
