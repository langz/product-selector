import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const Card = (props) => {
  const { action, text, icon } = props;
  return (
    <div className="card" onClick={action}>
      <img src={icon} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{text}</b>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
  );
};

const ProductSelector = () => {
  const [activity, setActivity] = useState("");
  const [condition, setCondition] = useState("");
  const [customized, setCustomized] = useState(false);
  const [height, setHeight] = useState(0);
  const [hand, setHand] = useState(0);

  const handMarks = [
    {
      value: 140,
      label: "150cm",
    },
    {
      value: 160,
      label: "150cm",
    },
    {
      value: 180,
      label: "180cm",
    },
    {
      value: 200,
      label: "200cm",
    },
    {
      value: 220,
      label: "220cm",
    },
    {
      value: 240,
      label: "240cm",
    },
    {
      value: 260,
      label: "260cm",
    },
  ];

  const marks = [
    {
      value: 150,
      label: "150cm",
    },
    {
      value: 160,
      label: "160cm",
    },
    {
      value: 170,
      label: "170cm",
    },
    {
      value: 180,
      label: "180cm",
    },
    {
      value: 190,
      label: "190cm",
    },
    {
      value: 200,
      label: "200cm",
    },
  ];

  function valuetext(value) {
    return `${value}cm`;
  }

  function valuetextHand(value) {
    return `${value}mm`;
  }

  function handSize(handSize) {
    let size = "M";
    if (handSize >= 140 && handSize <= 165) {
      size = "XS";
    } else if (handSize >= 165 && handSize <= 190) {
      size = "S";
    } else if (handSize >= 190 && handSize <= 215) {
      size = "M";
    } else if (handSize >= 215 && handSize <= 240) {
      size = "L";
    } else if (handSize >= 240 && handSize <= 265) {
      size = "XL";
    }
    return size;
  }

  const activities = [
    {
      name: "Skating and classic skiing",
      icon:
        "https://www.swixsport.com/siteassets/activity/langrenn_002-min.jpg?w=400&h=400&quality=80&mode=crop",
    },
    {
      name: "Competition racing",
      icon:
        "https://pbs.twimg.com/profile_images/831152866794434560/9IxTrkq7_400x400.jpg",
    },
    {
      name: "Backcountry skiing",
      icon:
        "https://www.swixsport.com/siteassets/activity/topptur_002-min.jpg?w=400&h=400&quality=80&mode=crop",
    },
    {
      name: "Expeditions",
      icon: "https://www.bergans.com/pub_images/small/5651-123_2.jpg",
    },
    {
      name: "Snowshoeing",
      icon:
        "https://assets.experienceniseko.com/blog/_largeGalleryThumbnail/15340/NAC-snowshoeing-niseko-day-time-snowshoe-24-edit.jpg?mtime=20170302100533",
    },
    {
      name: "Roller skiing",
      icon:
        "https://www.swixsport.com/siteassets/articles/rulleski-guide/rollerski_block_003.jpg?w=400&h=400&quality=80&mode=crop",
    },
  ];

  const conditions = [
    {
      name: "Groomed trails",
      icon:
        "https://www.lortebu.no/bilder.php?db=lortebu&post_table=bildegalleri&felt=bildefil1&id=15",
    },
    {
      name: "Loose tracks",
      icon: "https://pangarden.no/wp-content/uploads/2014/11/Vinter-nr-1.jpg",
    },
    {
      name: "Off track",
      icon:
        "https://undiscoveredmountains.com/uploads/gallery/3921/nordic-skiing-in-the-Southern-French-Alps-(7-of-8)-lt.jpg",
    },
  ];

  const activitityComponents = activities.map(function (activity) {
    return (
      <Card
        action={() => setActivity(activity.name)}
        text={activity.name}
        icon={activity.icon}
      />
    );
  });

  const conditionComponents = conditions.map(function (condition) {
    return (
      <Card
        action={() => setCondition(condition.name)}
        text={condition.name}
        icon={condition.icon}
      />
    );
  });

  const productPage = (
    <>
      <Card
        text={
          height > 0
            ? "Triac 4.0 Aero - " + height * 0.83 + "cm"
            : "Triac 4.0 Aero"
        }
        icon={
          "https://www.swixsport.com/globalassets/inriver/resources/rct40-00.jpg?width=400"
        }
      />
      <Card
        text={
          hand > 0
            ? "Strap Pro Fit TCS - Størrelse " + handSize(hand)
            : "Strap Pro Fit TCS"
        }
        icon={
          "https://www.swixsport.com/globalassets/inriver/resources/rdpftcsm_computedimageurl.jpg?width=400&height=400&quality=80&f.sharpen=30"
        }
      />
      <Card
        text={"Basket Triac, Blue leaf"}
        icon={
          "https://www.swixsport.com/globalassets/inriver/resources/rdtrts3_computedimageurl.jpg?width=400&height=400&quality=80&f.sharpen=30"
        }
      />
    </>
  );

  const handleChangeHeight = (event, newValue) => {
    setHeight(newValue);
  };

  const handleChangeHand = (event, newValue) => {
    setHand(newValue);
  };

  const customizePage = (
    <>
      <h3></h3>
      <Typography
        id="discrete-slider-custom"
        gutterBottom
        gutterTop
        style={{ marginTop: "50px" }}
      >
        Body length without ski boots (cm):
      </Typography>
      <Slider
        defaultValue={175.0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={2.5}
        min={150.0}
        max={200.0}
        valueLabelDisplay="on"
        style={{ color: "#d70828", marginBottom: "100px" }}
        marks={marks}
        onChange={handleChangeHeight}
      />
      <Typography id="discrete-slider-custom" gutterBottom gutterTop>
        Hand width (mm):
      </Typography>
      <Slider
        defaultValue={200.0}
        getAriaValueText={valuetextHand}
        aria-labelledby="discrete-slider-custom"
        step={5}
        min={140}
        max={260}
        valueLabelDisplay="on"
        style={{ color: "#d70828", marginBottom: "100px" }}
        marks={handMarks}
        onChange={handleChangeHand}
      />

      <div className="button-container">
        <Button
          variant="contained"
          onClick={() => {
            setCustomized(true);
          }}
        >
          Skip
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setCustomized(true);
          }}
          style={{ backgroundColor: "#d70828" }}
        >
          Give me my recommendation
        </Button>
      </div>
    </>
  );

  return (
    <div id="product-selector">
      <h3>
        {!activity && "What activity should you mostly do with your poles?"}
        {activity &&
          !condition &&
          "Under which conditions will you mostly use your poles?"}
        {activity && condition && !customized && "Size recommendations"}
        {activity && condition && customized && "We recommend you:"}
      </h3>
      <div id="product-selector-wrapper">
        {!activity && activitityComponents}
        {activity && !condition && conditionComponents}
        {activity && condition && !customized && customizePage}
        {activity && condition && customized && productPage}
      </div>
    </div>
  );
};

export default ProductSelector;
