const isSlotBased = document.getElementById("isSlotBased");

const overTimeSlotRate = document.getElementById("overTimeSlotRate");
const overTimeNonSlotRate = document.getElementById("overTimeNonSlotRate");

const selectedIndex = overTimeRateType.selectedIndex;

overTimeSlotRate.style.display = "none";
overTimeNonSlotRate.style.display = "block";

isSlotBased.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    overTimeSlotRate.style.display = "block";
    overTimeNonSlotRate.style.display = "none";
  } else {
    overTimeSlotRate.style.display = "none";
    overTimeNonSlotRate.style.display = "block";
  }
});

// -------------------------------------------------------------------------

const hasWeekendSpecialRate = document.getElementById("hasWeekendSpecialRate");
const weekendSpecialRateType = document.getElementById(
  "weekendSpecialRateType"
);

const isSlotBasedWeekendBlock = document.getElementById(
  "isSlotBasedWeekendBlock"
);
const isSlotBasedWeekend = document.getElementById("isSlotBasedWeekend");

const weekendSpecialRateSlot = document.getElementById(
  "weekendSpecialRateSlot"
);
const weekendSpecialRateNonSlot = document.getElementById(
  "weekendSpecialRateNonSlot"
);

weekendSpecialRateType.style.display = "none";
isSlotBasedWeekendBlock.style.display = "none";
weekendSpecialRateSlot.style.display = "none";
weekendSpecialRateNonSlot.style.display = "none";

hasWeekendSpecialRate.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    weekendSpecialRateType.style.display = "block";
    isSlotBasedWeekendBlock.style.display = "block";
    weekendSpecialRateNonSlot.style.display = "block";
  } else {
    weekendSpecialRateType.style.display = "none";
    isSlotBasedWeekendBlock.style.display = "none";
    weekendSpecialRateSlot.style.display = "none";
    weekendSpecialRateNonSlot.style.display = "none";
  }
});

isSlotBasedWeekend.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    weekendSpecialRateSlot.style.display = "block";
    weekendSpecialRateNonSlot.style.display = "none";
  } else {
    weekendSpecialRateSlot.style.display = "none";
    weekendSpecialRateNonSlot.style.display = "block";
  }
});

$(document).ready(function () {
  $("#hasWeekendSpecialRate").click(function () {
    $("weekendSection").toggle("slow");
  });
});

// -----------------------------------------------------------------------

const hasReligiousHoliday = document.getElementById("hasReligiousHoliday");
const religiousHolidayType = document.getElementById("religiousHolidayType");
const isSlotBasedReligiousHolidayBlock = document.getElementById(
  "isSlotBasedReligiousHolidayBlock"
);
const isSlotBasedReligiousHoliday = document.getElementById(
  "isSlotBasedReligiousHoliday"
);

const religiousHolidaySpecialRateSlot = document.getElementById(
  "religiousHolidaySpecialRateSlot"
);
const religiousHolidaySpecialRateNonSlot = document.getElementById(
  "religiousHolidaySpecialRateNonSlot"
);

religiousHolidayType.style.display = "none";

isSlotBasedReligiousHolidayBlock.style.display = "none";

religiousHolidaySpecialRateSlot.style.display = "none";
religiousHolidaySpecialRateNonSlot.style.display = "none";

hasReligiousHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    religiousHolidayType.style.display = "block";

    isSlotBasedReligiousHolidayBlock.style.display = "block";

    religiousHolidaySpecialRateSlot.style.display = "none";
    religiousHolidaySpecialRateNonSlot.style.display = "block";
  } else {
    religiousHolidayType.style.display = "none";

    isSlotBasedReligiousHolidayBlock.style.display = "none";

    religiousHolidaySpecialRateSlot.style.display = "none";
    religiousHolidaySpecialRateNonSlot.style.display = "none";
  }
});

isSlotBasedReligiousHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    religiousHolidaySpecialRateSlot.style.display = "block";
    religiousHolidaySpecialRateNonSlot.style.display = "none";
  } else {
    religiousHolidaySpecialRateSlot.style.display = "none";
    religiousHolidaySpecialRateNonSlot.style.display = "block";
  }
});

// -------------------------------------------------------------------

const hasRegularHoliday = document.getElementById("hasRegularHoliday");
const regularHolidayType = document.getElementById("regularHolidayType");

const isSlotBasedRegularHolidayBlock = document.getElementById(
  "isSlotBasedRegularHolidayBlock"
);
const isSlotBasedRegularHoliday = document.getElementById(
  "isSlotBasedRegularHoliday"
);
const regularHolidaySpecialRateSlot = document.getElementById(
  "regularHolidaySpecialRateSlot"
);
const regularHolidaySpecialRateNonSlot = document.getElementById(
  "regularHolidaySpecialRateNonSlot"
);

regularHolidayType.style.display = "none";
isSlotBasedRegularHolidayBlock.style.display = "none";

regularHolidaySpecialRateSlot.style.display = "none";
regularHolidaySpecialRateNonSlot.style.display = "none";

hasRegularHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    regularHolidayType.style.display = "block";
    isSlotBasedRegularHolidayBlock.style.display = "block";
    regularHolidaySpecialRateNonSlot.style.display = "block";
  } else {
    regularHolidayType.style.display = "none";
    isSlotBasedRegularHolidayBlock.style.display = "none";
    regularHolidaySpecialRateSlot.style.display = "none";
    regularHolidaySpecialRateNonSlot.style.display = "none";
  }
});

isSlotBasedRegularHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    regularHolidaySpecialRateSlot.style.display = "block";
    regularHolidaySpecialRateNonSlot.style.display = "none";
  } else {
    regularHolidaySpecialRateSlot.style.display = "none";
    regularHolidaySpecialRateNonSlot.style.display = "block";
  }
});

// ----------------------------------------------------------------------

const hasMealAllowance = document.getElementById("hasMealAllowance");
const mealAllowanceType = document.getElementById("mealAllowanceType");
const mealAllowanceAmount = document.getElementById("mealAllowanceAmount");

const hasMinMealHour = document.getElementById("hasMinMealHour");
const hasMinMealTime = document.getElementById("hasMinMealTime");

const hasMinMealHourBlock = document.getElementById("hasMinMealHourBlock");
const hasMinMealTimeBlock = document.getElementById("hasMinMealTimeBlock");

const minMealHour = document.getElementById("minMealHour");
const minMealTime = document.getElementById("minMealTime");

mealAllowanceType.style.display = "none";
mealAllowanceAmount.style.display = "none";

hasMinMealHourBlock.style.display = "none";
hasMinMealTimeBlock.style.display = "none";

minMealHour.style.display = "none";
minMealTime.style.display = "none";

hasMealAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    mealAllowanceType.style.display = "block";
    mealAllowanceAmount.style.display = "block";

    hasMinMealHourBlock.style.display = "block";
    hasMinMealTimeBlock.style.display = "block";
  } else {
    mealAllowanceType.style.display = "none";
    mealAllowanceAmount.style.display = "none";

    hasMinMealHourBlock.style.display = "none";
    hasMinMealTimeBlock.style.display = "none";

    minMealHour.style.display = "none";
    minMealTime.style.display = "none";
  }
});

hasMinMealHour.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minMealHour.style.display = "block";
  } else {
    minMealHour.style.display = "none";
  }
});

hasMinMealTime.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minMealTime.style.display = "block";
  } else {
    minMealTime.style.display = "none";
  }
});

// -----------------------------------------------------------------------------

const hasTransportAllowance = document.getElementById("hasTransportAllowance");
const transportAllowance = document.getElementById("transportAllowance");
const transportAllowanceEligibleGender = document.getElementById(
  "transportAllowanceEligibleGender"
);

const hasMinHourTransportBlock = document.getElementById(
  "hasMinHourTransportBlock"
);
const hasMinTimeTransportBlock = document.getElementById(
  "hasMinTimeTransportBlock"
);

const hasMinHourTransport = document.getElementById("hasMinHourTransport");
const hasMinTimeTransport = document.getElementById("hasMinTimeTransport");

const minHourTransport = document.getElementById("minHourTransport");
const minTimeTransport = document.getElementById("minTimeTransport");

transportAllowance.style.display = "none";
transportAllowanceEligibleGender.style.display = "none";

hasMinHourTransportBlock.style.display = "none";
hasMinTimeTransportBlock.style.display = "none";

minHourTransport.style.display = "none";
minTimeTransport.style.display = "none";

hasTransportAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    transportAllowance.style.display = "block";
    transportAllowanceEligibleGender.style.display = "block";

    hasMinHourTransportBlock.style.display = "block";
    hasMinTimeTransportBlock.style.display = "block";
  } else {
    transportAllowance.style.display = "none";
    transportAllowanceEligibleGender.style.display = "none";

    hasMinHourTransportBlock.style.display = "none";
    hasMinTimeTransportBlock.style.display = "none";

    minHourTransport.style.display = "none";
    minTimeTransport.style.display = "none";
  }
});

hasMinHourTransport.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourTransport.style.display = "block";
  } else {
    minHourTransport.style.display = "none";
  }
});

hasMinTimeTransport.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeTransport.style.display = "block";
  } else {
    minTimeTransport.style.display = "none";
  }
});

// ------------------------------------------------------------------------------

const hasNightShift = document.getElementById("hasNightShift");
const nightShiftType = document.getElementById("nightShiftType");
const nightShiftGender = document.getElementById("nightShiftGender");

const hasMinHourNightBlock = document.getElementById("hasMinHourNightBlock");
const hasMinTimeNightBlock = document.getElementById("hasMinTimeNightBlock");

const hasMinHourNight = document.getElementById("hasMinHourNight");
const hasMinTimeNight = document.getElementById("hasMinTimeNight");

const minHourNight = document.getElementById("minHourNight");
const minTimeNight = document.getElementById("minTimeNight");

nightShiftType.style.display = "none";
nightShiftGender.style.display = "none";

hasMinHourNightBlock.style.display = "none";
hasMinTimeNightBlock.style.display = "none";

minHourNight.style.display = "none";
minTimeNight.style.display = "none";

hasNightShift.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    nightShiftType.style.display = "block";
    nightShiftGender.style.display = "block";

    hasMinHourNightBlock.style.display = "block";
    hasMinTimeNightBlock.style.display = "block";
  } else {
    nightShiftType.style.display = "none";
    nightShiftGender.style.display = "none";

    hasMinHourNightBlock.style.display = "none";
    hasMinTimeNightBlock.style.display = "none";

    minHourNight.style.display = "none";
    minTimeNight.style.display = "none";
  }
});

hasMinHourNight.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourNight.style.display = "block";
  } else {
    minHourNight.style.display = "none";
  }
});

hasMinTimeNight.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeNight.style.display = "block";
  } else {
    minTimeNight.style.display = "none";
  }
});

// --------------------------------------------------------------------------------

const hasWeeklyHoliday = document.getElementById("hasWeeklyHoliday");
const weeklyHolidayType = document.getElementById("weeklyHolidayType");
const holidayEligiblegender = document.getElementById("holidayEligiblegender");

const hasMinHourWeeklyHolidayBlock = document.getElementById(
  "hasMinHourWeeklyHolidayBlock"
);
const hasMinTimeWeeklyHolidayBlock = document.getElementById(
  "hasMinTimeWeeklyHolidayBlock"
);

const hasMinHourWeeklyHoliday = document.getElementById(
  "hasMinHourWeeklyHoliday"
);
const hasMinTimeWeeklyHoliday = document.getElementById(
  "hasMinTimeWeeklyHoliday"
);

const minHourWeeklyHoliday = document.getElementById("minHourWeeklyHoliday");
const minTimeWeeklyHoliday = document.getElementById("minTimeWeeklyHoliday");

weeklyHolidayType.style.display = "none";
holidayEligiblegender.style.display = "none";

hasMinHourWeeklyHolidayBlock.style.display = "none";
hasMinTimeWeeklyHolidayBlock.style.display = "none";

minHourWeeklyHoliday.style.display = "none";
minTimeWeeklyHoliday.style.display = "none";

hasWeeklyHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    weeklyHolidayType.style.display = "block";
    holidayEligiblegender.style.display = "block";

    hasMinHourWeeklyHolidayBlock.style.display = "block";
    hasMinTimeWeeklyHolidayBlock.style.display = "block";
  } else {
    weeklyHolidayType.style.display = "none";
    holidayEligiblegender.style.display = "none";

    hasMinHourWeeklyHolidayBlock.style.display = "none";
    hasMinTimeWeeklyHolidayBlock.style.display = "none";

    minHourWeeklyHoliday.style.display = "none";
    minTimeWeeklyHoliday.style.display = "none";
  }
});

hasMinHourWeeklyHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourWeeklyHoliday.style.display = "block";
  } else {
    minHourWeeklyHoliday.style.display = "none";
  }
});

hasMinTimeWeeklyHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeWeeklyHoliday.style.display = "block";
  } else {
    minTimeWeeklyHoliday.style.display = "none";
  }
});

// ---------------------------------------------------------------------------------

const hasReligiousHolidayAllowance = document.getElementById(
  "hasReligiousHolidayAllowance"
);
const religiousHolidayAllowanceType = document.getElementById(
  "religiousHolidayAllowanceType"
);
const religiousHolidayAllowanceAmount = document.getElementById(
  "religiousHolidayAllowanceAmount"
);

const hasMinHourReligiousBlock = document.getElementById(
  "hasMinHourReligiousBlock"
);
const hasMinTimeReligiousBlock = document.getElementById(
  "hasMinTimeReligiousBlock"
);

const hasMinHourReligious = document.getElementById("hasMinHourReligious");
const hasMinTimeReligious = document.getElementById("hasMinTimeReligious");

const minHourReligious = document.getElementById("minHourReligious");
const minTimeReligious = document.getElementById("minTimeReligious");

religiousHolidayAllowanceType.style.display = "none";
religiousHolidayAllowanceAmount.style.display = "none";

hasMinHourReligiousBlock.style.display = "none";
hasMinTimeReligiousBlock.style.display = "none";

minHourReligious.style.display = "none";
minTimeReligious.style.display = "none";

hasReligiousHolidayAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    religiousHolidayAllowanceType.style.display = "block";
    religiousHolidayAllowanceAmount.style.display = "block";

    hasMinHourReligiousBlock.style.display = "block";
    hasMinTimeReligiousBlock.style.display = "block";
  } else {
    religiousHolidayAllowanceType.style.display = "none";
    religiousHolidayAllowanceAmount.style.display = "none";

    hasMinHourReligiousBlock.style.display = "none";
    hasMinTimeReligiousBlock.style.display = "none";

    minHourReligious.style.display = "none";
    minTimeReligious.style.display = "none";
  }
});

hasMinHourReligious.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourReligious.style.display = "block";
  } else {
    minHourReligious.style.display = "none";
  }
});

hasMinTimeReligious.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeReligious.style.display = "block";
  } else {
    minTimeReligious.style.display = "none";
  }
});

// -------------------------------------------------------------------------------------------

const hasOtherHolidayAllowance = document.getElementById(
  "hasOtherHolidayAllowance"
);
const otherHolidayAllowanceType = document.getElementById(
  "otherHolidayAllowanceType"
);
const otherHolidayAllowanceAmount = document.getElementById(
  "otherHolidayAllowanceAmount"
);

const hasMinHourOtherHolidayBlock = document.getElementById(
  "hasMinHourOtherHolidayBlock"
);
const hasMinTimeOtherHolidayBlock = document.getElementById(
  "hasMinTimeOtherHolidayBlock"
);

const hasMinHourOtherHoliday = document.getElementById(
  "hasMinHourOtherHoliday"
);
const hasMinTimeOtherHoliday = document.getElementById(
  "hasMinTimeOtherHoliday"
);

const minHourOtherHoliday = document.getElementById("minHourOtherHoliday");
const minTimeOtherHoliday = document.getElementById("minTimeOtherHoliday");

otherHolidayAllowanceType.style.display = "none";
otherHolidayAllowanceAmount.style.display = "none";

hasMinHourOtherHolidayBlock.style.display = "none";
hasMinTimeOtherHolidayBlock.style.display = "none";

minHourOtherHoliday.style.display = "none";
minTimeOtherHoliday.style.display = "none";

hasOtherHolidayAllowance.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    otherHolidayAllowanceType.style.display = "block";
    otherHolidayAllowanceAmount.style.display = "block";

    hasMinHourOtherHolidayBlock.style.display = "block";
    hasMinTimeOtherHolidayBlock.style.display = "block";
  } else {
    otherHolidayAllowanceType.style.display = "none";
    otherHolidayAllowanceAmount.style.display = "none";

    hasMinHourOtherHolidayBlock.style.display = "none";
    hasMinTimeOtherHolidayBlock.style.display = "none";

    minHourOtherHoliday.style.display = "none";
    minTimeOtherHoliday.style.display = "none";
  }
});

hasMinHourOtherHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minHourOtherHoliday.style.display = "block";
  } else {
    minHourOtherHoliday.style.display = "none";
  }
});

hasMinTimeOtherHoliday.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    minTimeOtherHoliday.style.display = "block";
  } else {
    minTimeOtherHoliday.style.display = "none";
  }
});

// -------------------------------------------------------------------------

const hasHourlyCapLimit = document.getElementById("hasHourlyCapLimit");
const maxAlowedHours = document.getElementById("maxAlowedHours");

maxAlowedHours.style.display = "none";

hasHourlyCapLimit.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    maxAlowedHours.style.display = "block";
  } else {
    maxAlowedHours.style.display = "none";
  }
});

const hasDailyCapLimit = document.getElementById("hasDailyCapLimit");
const maxAllowedDays = document.getElementById("maxAllowedDays");

maxAllowedDays.style.display = "none";

hasDailyCapLimit.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    maxAllowedDays.style.display = "block";
  } else {
    maxAllowedDays.style.display = "none";
  }
});

const hasBillAmountCapLimit = document.getElementById("hasBillAmountCapLimit");
const maxBillAmount = document.getElementById("maxBillAmount");

maxBillAmount.style.display = "none";

hasBillAmountCapLimit.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    maxBillAmount.style.display = "block";
  } else {
    maxBillAmount.style.display = "none";
  }
});

const hasHourCapLimit = document.getElementById("hasHourCapLimit");
const maxAllowedHours = document.getElementById("maxAllowedHours");

maxAllowedHours.style.display = "none";

hasHourCapLimit.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    maxAllowedHours.style.display = "block";
  } else {
    maxAllowedHours.style.display = "none";
  }
});

const hasBillAmountCapLimit2 = document.getElementById(
  "hasBillAmountCapLimit2"
);
const maxBillAmount2 = document.getElementById("maxBillAmount2");

maxBillAmount2.style.display = "none";

hasBillAmountCapLimit2.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    maxBillAmount2.style.display = "block";
  } else {
    maxBillAmount2.style.display = "none";
  }
});
