import React, { useState, useEffect } from "react";
import homepageCoverPage1 from "../../Pices/08f04c907aeb48f79070fd4ca0a584f9-citybrowse_desktop.webp";
import homepageCoverPage2 from "../../Pices/0205288125d365f93edf9b62837de839-nightlife_desktop.webp";
import homepageCoverPage3 from "../../Pices/389ece7b7e2dc7ff8d28524bad30d52c-dsrp_desktop.webp";
import topTrendingImage1 from "../../Pices/topTrending1.jpg";
import topTrendingImage2 from "../../Pices/topTrending2.jpg";
import topTrendingImage3 from "../../Pices/topTrending3.jpg";
import topTrendingImage4 from "../../Pices/topTrending4.jpg";
import topTrendingImage5 from "../../Pices/topTrending5.jpg";
import topTrendingImage6 from "../../Pices/topTrending6.jpg";
import topTrendingImage7 from "../../Pices/topTrending7.jpg";
import topTrendingImage8 from "../../Pices/topTrending8.jpg";
import NoEventsCalendar from "../../Pices/NoEventsCalendar.png";

// import MusicIcon from "../../Pices/music.png";
// import BusinessIcon from "../../Pices/business.png";
// import DatingIcon from "../../Pices/dating.png";
// import foodAndDrinkIcon from "../../Pices/foodAndDrink.png";
// import HobbiesIcon from "../../Pices/hobbies.png";
// import HolidyIcon from "../../Pices/holidy.png";
// import NightLifeIcon from "../../Pices/nightLife.png";
// import PerformingArtsIcon from "../../Pices/performingArts-.png";

import losAngeles from "../../Pices/ca--los-angeles.webp";
import sanDiego from "../../Pices/ca--san-diego.webp";
import sanFrancisco from "../../Pices/ca--san-francisco.webp";
import washington from "../../Pices/dc--washington.webp";
import miami from "../../Pices/fl--miami.webp";
import orlando from "../../Pices/fl--orlando.webp";
import atlanta from "../../Pices/ga--atlanta.webp";
import chicago from "../../Pices/il--chicago.webp";
import boston from "../../Pices/ma--boston.webp";
import charlotte from "../../Pices/nc--charlotte.webp";
import lasVegas from "../../Pices/nv--las-vegas.webp";
import newYork from "../../Pices/ny--new-york.webp";
import philadelphia from "../../Pices/pa--philadelphia.webp";
import dallas from "../../Pices/tx--dallas.webp";
import houston from "../../Pices/tx--houston.webp";

function HomePage() {
  const images = [homepageCoverPage1, homepageCoverPage2, homepageCoverPage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const changeImage = (newIndex, newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="homePageParent">
      <div className="homePageBox">
        <div className="homepageCoverPageBox">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`homepageCoverPage${index + 1}`}
              className={`${
                index === currentIndex
                  ? "showImage"
                  : direction === "right"
                  ? "slideRight"
                  : "slideLeft"
              }`}
            />
          ))}
        </div>
        <span className="homepageCoverPageDotBox">
          {images.map((_, index) => (
            <span
              key={index}
              className={`${currentIndex === index ? "active blink" : ""}`}
              onClick={() => changeImage(index, "left")}
            ></span>
          ))}
        </span>
        <span className="homepageCoverPageArrowBox">
          <span
            onClick={() =>
              changeImage(
                (currentIndex - 1 + images.length) % images.length,
                "left"
              )
            }
          >
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <span
            onClick={() =>
              changeImage((currentIndex + 1) % images.length, "right")
            }
          >
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </span>
      </div>
      <div className="homePageBox">
        <div className="listOfEventBox">
          <span className="listOfEvent">
            {/* <img src={MusicIcon} alt="MusicIcon" class="iconList" /> */}
            <i class="fa-solid fa-microphone iconList"></i>
            <p>Music</p>
          </span>
          <span className="listOfEvent">
            {/* <img src={NightLifeIcon} alt="NightLifeIcon" class="iconList" /> */}
            <i class="fa-solid fa-lightbulb iconList"></i>
            <p>NightLife</p>
          </span>
          <span className="listOfEvent">
            {/* <img
              src={PerformingArtsIcon}
              alt="PerformingArtsIcon"
              class="iconList iconListArts"
            /> */}
            <i class="fa-solid fa-masks-theater iconList"></i>
            <p>Performing & Visual Arts</p>
          </span>
          <span className="listOfEvent">
            {/* <img src={HolidyIcon} alt="HolidyIcon" class="iconList" /> */}
            <i class="fa-solid fa-calendar-xmark iconList"></i>
            <p>Holidys</p>
          </span>
          <span className="listOfEvent">
            {/* <img src={DatingIcon} alt="DatingIcon" class="iconList" /> */}
            <i class="fa-solid fa-comments iconList"></i>
            <p>Dating</p>
          </span>
          <span className="listOfEvent">
            {/* <img src={HobbiesIcon} alt="HobbiesIcon" class="iconList" /> */}
            <i class="fa-solid fa-gamepad iconList"></i>
            <p>Hobbies</p>
          </span>
          <span className="listOfEvent">
            {/* <img src={BusinessIcon} alt="BusinessIcon" class="iconList" /> */}
            <i class="fa-solid fa-business-time iconList"></i>
            <p>Business</p>
          </span>
          <span className="listOfEvent">
            {/* <img
              src={foodAndDrinkIcon}
              alt="foodAndDrinkIcon"
              class="iconList"
            /> */}
            <i class="fa-solid fa-pizza-slice iconList"></i>
            <p>Food & Drink</p>
          </span>
        </div>
      </div>
      <div className="homePageBox">
        <div className="homePageBrowsingEventBox">
          <span>Browsing events in </span>
          <span className="homePageBrowsingEventSearchBar">
            <i class="fa-solid fa-angle-down"></i>
            <input
              type="text"
              name="BrowsingLocationBar"
              id="BrowsingLocationBar"
              placeholder="Choose a location"
            />
          </span>
        </div>
      </div>
      <div className="homePageBox">
        <div className="homePageEventListAll">
          <span className="homePageEventListAll1">All</span>
          <span>For you</span>
          <span>Online</span>
          <span>Today</span>
          <span>This weekend</span>
          <span>Free</span>
          <span>Music</span>
          <span>Food & Drink</span>
          <span>Charity & Causes</span>
        </div>
      </div>
      <div className="homePageBox">
        <div className="topTrendingBox">
          <div className="homepagetopTrendingArrowTopBox">
            <h2>Top trending in Hyderabad</h2>
            <span className="homepagetopTrendingArrowBox">
              <span>
                <i class="fa-solid fa-angle-left"></i>
              </span>
              <span>
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </span>
          </div>
          <div className="homepagetopTrendingBottomBox">
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">1</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage1}
                    alt="topTrendingImage1"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>Angels Connect- Hyderabad Edition</span>
                  <b>Friday • 6:00 PM</b>
                  <p>Hyderabad Will share post</p>
                  <p>Free</p>
                  <p>PedalStart</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>540 followers
                  </p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">2</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage2}
                    alt="topTrendingImage2"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>Dubai Real Estate Event in Hyderabad</span>
                  <b>Saturday • 10:00 AM</b>
                  <p>Park Hyatt Hyderabad</p>
                  <p>Free</p>
                  <p>Jasbier Siingh Sachdeva</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>12 followers
                  </p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">3</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage3}
                    alt="topTrendingImage3"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>New Zealand Education Fair 2025</span>
                  <b>Sun, Jan 19 • 11:00 AM</b>
                  <p>Marigold Hotel</p>
                  <p>Free</p>
                  <p>Estero Education Services</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>48 followers
                  </p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">4</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage4}
                    alt="topTrendingImage4"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>
                    Startup Valley - Craziest Startup Event of Hyderabad
                  </span>
                  <b>Sun, Jan 19 • 3:00 PM</b>
                  <p>Hyderabad</p>
                  <p>Free</p>
                  <p>StartupParty</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>5.1k followers
                  </p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">5</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage5}
                    alt="topTrendingImage5"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>iDoneSEO Bloggers Walk - Hyderabad</span>
                  <b>Sun, Jan 19 • 4:00 PM</b>
                  <p>Botanical Garden</p>
                  <p>Free</p>
                  <p>iDoneSEO</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>124 followers
                  </p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">6</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage6}
                    alt="topTrendingImage6"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>Modern Apartments In Prestige Spring Heights</span>
                  <b>Wed, Jan 22 • 10:00 AM</b>
                  <p>Hyderabad</p>
                  <p>Free</p>
                  <p></p>
                  <p></p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">7</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage7}
                    alt="topTrendingImage7"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>Pool Party, Belly Dance, Ramp Show, Food & Drinks</span>
                  <b>Sun, Feb 2 • 6:30 PM</b>
                  <p>Hyderabad</p>
                  <p>Free</p>
                  <p>Sonali Events</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>51 followers
                  </p>
                </span>
              </span>
            </div>
            <div className="homepagetopTrendingBottomimagesDiv">
              <span className="homepagetopTrendingBottomNumber">8</span>
              <span className="homepagetopTrendingBottomimageBoxSpan">
                <span className="topTrendingImageBox">
                  <img
                    src={topTrendingImage8}
                    alt="topTrendingImage8"
                    class="topTrendingImage"
                  />
                </span>
                <span className="topTrendingImageBelowContentBox">
                  <span>Global University Fair in Hyderabad</span>
                  <b>Tue, Feb 18 • 11:00 AM</b>
                  <p>Taj Krishna, Hyderabad</p>
                  <p>Free</p>
                  <p>SI-UK India</p>
                  <p>
                    <i class="fa-solid fa-user-tie"></i>417 followers
                  </p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="homePageBox">
        <div className="noEventsTryDiffLocationBox">
          <img
            src={NoEventsCalendar}
            alt="NoEventsCalendarImage"
            class="NoEventsCalendarImage"
          />
          <b>No events in your area</b>
          <span>Try a different location</span>
        </div>
      </div>
      <div className="homePageBox">
        <div className="topDestinationsBox">
          <div className="homepagetopTrendingArrowTopBox">
            <h2>Top destinations in United States</h2>
            <span className="homepagetopTrendingArrowBox">
              <span>
                <i class="fa-solid fa-angle-left"></i>
              </span>
              <span>
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </span>
          </div>
          <div className="topDestinationsListOfBoxs">
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={newYork}
                  alt="newYorkImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">New York</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={losAngeles}
                  alt="losAngelesImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Los Angeles</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={chicago}
                  alt="chicagoImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Chicago</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={washington}
                  alt="washingtonImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Washington</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={atlanta}
                  alt="atlantaImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Atlanta</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={dallas}
                  alt="dallasImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Dallas</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={houston}
                  alt="houstonImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Houston</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={sanFrancisco}
                  alt="sanFranciscoImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">San Francisco</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={miami}
                  alt="miamiImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Miami</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={boston}
                  alt="bostonImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Boston</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={lasVegas}
                  alt="lasVegasImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Las Vegas</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={charlotte}
                  alt="charlotteImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Charlotte</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={orlando}
                  alt="orlandoImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Orlando</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={philadelphia}
                  alt="philadelphiaImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">Philadelphia</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
            <span className="topDestinations">
              <span class="topDestinationsImageSpan">
                <img
                  src={sanDiego}
                  alt="sanDiegoImage"
                  class="topDestinationsImage"
                />
              </span>
              <span className="topDestinationsImageState">San Diego</span>
              <span className="topDestinationsLine">
                <span className="topDestinationsLineSpan"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="homePageBox">
        <div className="popularCitiesBox">
          <span className="popularCitiesHeading">Popular cities</span>
          <span className="popularCitiesLinks">
            <span>
              Things to do in Austin
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Abilene
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Denver
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Phoenix
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Seattle
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Anaheim
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Albuquerque
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Nashville
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Portland
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Detroit
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Indianapolis
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Baltimore
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in San Antonio
              <i class="ri-arrow-right-up-line"></i>
            </span>
            <span>
              Things to do in Raleigh
              <i class="ri-arrow-right-up-line"></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
