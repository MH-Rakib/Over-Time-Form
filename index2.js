$(document).ready(function () {
  // Over Time Rate setup start

  $("#overTimeSlotRate").hide();

  $("#isSlotBased").change(function () {
    if ($("#isSlotBased").is(":checked")) {
      $("#overTimeSlotRate").show();
      $("#overTimeNonSlotRate").hide();
    } else {
      $("#overTimeSlotRate").hide();
      $("#overTimeNonSlotRate").show();
    }
  });

  // Over Time Rate setup end



  // Weekend Section Start

  $("#weekendSection").hide();

  $("#hasWeekendSpecialRate").change(function () {
    if ($("#hasWeekendSpecialRate").is(":checked")) {
      $("#weekendSection").show("slow");
      $("#weekendSpecialRateSlot").hide();
    } else {
      $("#weekendSection").hide("slow");
    }
  });

  $("#isSlotBasedWeekend").change(function () {
    if ($("#isSlotBasedWeekend").is(":checked")) {
      $("#weekendSpecialRateSlot").show();
      $("#weekendSpecialRateNonSlot").hide();
    } else {
      $("#weekendSpecialRateSlot").hide();
      $("#weekendSpecialRateNonSlot").show();
    }
  });

  // Weekend Section End




  // Religious Holiday Section Start

  $("#religiousHolidaySection").hide();

  $("#hasReligiousHoliday").change(function () {
    if ($("#hasReligiousHoliday").is(":checked")) {
      $("#religiousHolidaySection").show("slow");
      $("#religiousHolidaySpecialRateSlot").hide();
    } else {
      $("#religiousHolidaySection").hide("slow");
    }
  });

  $("#isSlotBasedReligiousHoliday").change(function () {
    if ($("#isSlotBasedReligiousHoliday").is(":checked")) {
      $("#religiousHolidaySpecialRateSlot").show();
      $("#religiousHolidaySpecialRateNonSlot").hide();
    } else {
      $("#religiousHolidaySpecialRateSlot").hide();
      $("#religiousHolidaySpecialRateNonSlot").show();
    }
  });

  // Religious Holiday Section End




  // Regular Holiday Section Start

  $("#regularHolidaySection").hide();

  $("#hasRegularHoliday").change(function () {
    if ($("#hasRegularHoliday").is(":checked")) {
      $("#regularHolidaySection").show("slow");
      $("#regularHolidaySpecialRateSlot").hide();
    } else {
      $("#regularHolidaySection").hide("slow");
    }
  });

  $("#isSlotBasedRegularHoliday").change(function () {
    if ($("#isSlotBasedRegularHoliday").is(":checked")) {
      $("#regularHolidaySpecialRateSlot").show();
      $("#regularHolidaySpecialRateNonSlot").hide();
    } else {
      $("#regularHolidaySpecialRateSlot").hide();
      $("#regularHolidaySpecialRateNonSlot").show();
    }
  });

  // Regular Holiday Section end




  // Meal Allowance Section Start

  $("#mealAllowanceSection").hide();

  $("#hasMealAllowance").change(function () {
    if ($("#hasMealAllowance").is(":checked")) {
      $("#mealAllowanceSection").show("slow");
      $("#minMealHour").hide();
      $("#minMealTime").hide();
    } else {
      $("#mealAllowanceSection").hide("slow");
    }
  });

  $("#hasMinMealHour").change(function () {
    if ($("#hasMinMealHour").is(":checked")) {
      $("#minMealHour").show("slow");
    } else {
      $("#minMealHour").hide("slow");
    }
  });

  $("#hasMinMealTime").change(function () {
    if ($("#hasMinMealTime").is(":checked")) {
      $("#minMealTime").show("slow");
    } else {
      $("#minMealTime").hide("slow");
    }
  });

  // Meal Allowance Section End



  // Transport Allowance Section Start

  $("#tranportAllowanceSection").hide();

  $("#hasTransportAllowance").change(function () {
    if ($("#hasTransportAllowance").is(":checked")) {
      $("#tranportAllowanceSection").show("slow");
      $("#minHourTransport").hide();
      $("#minTimeTransport").hide();
    } else {
      $("#tranportAllowanceSection").hide("slow");
    }
  });

  $("#hasMinHourTransport").change(function () {
    if ($("#hasMinHourTransport").is(":checked")) {
      $("#minHourTransport").show("slow");
    } else {
      $("#minHourTransport").hide("slow");
    }
  });

  $("#hasMinTimeTransport").change(function () {
    if ($("#hasMinTimeTransport").is(":checked")) {
      $("#minTimeTransport").show("slow");
    } else {
      $("#minTimeTransport").hide("slow");
    }
  });

  // Transport Allowance Section End



   // Night Shift Allowance Section Start

  $("#nightShiftAllowanceSection").hide();

  $("#hasNightShiftAllowance").change(function () {
    if ($("#hasNightShiftAllowance").is(":checked")) {
      $("#nightShiftAllowanceSection").show("slow");
      $("#minHourNight").hide();
      $("#minTimeNight").hide();
    } else {
      $("#nightShiftAllowanceSection").hide("slow");
    }
  });

  $("#hasMinHourNight").change(function () {
    if ($("#hasMinHourNight").is(":checked")) {
      $("#minHourNight").show("slow");
    } else {
      $("#minHourNight").hide("slow");
    }
  });

  $("#hasMinTimeNight").change(function () {
    if ($("#hasMinTimeNight").is(":checked")) {
      $("#minTimeNight").show("slow");
    } else {
      $("#minTimeNight").hide("slow");
    }
  });

  // Night Shift Allowance Section End



  // Weekly Holiday Allowance Section Start

  $("#weeklyHolidaySection").hide();

  $("#hasWeeklyHolidayAllowance").change(function () {
    if ($("#hasWeeklyHolidayAllowance").is(":checked")) {
      $("#weeklyHolidaySection").show("slow");
      $("#minHourWeeklyHoliday").hide();
      $("#minTimeWeeklyHoliday").hide();
    } else {
      $("#weeklyHolidaySection").hide("slow");
    }
  });

  $("#hasMinHourWeeklyHoliday").change(function () {
    if ($("#hasMinHourWeeklyHoliday").is(":checked")) {
      $("#minHourWeeklyHoliday").show("slow");
    } else {
      $("#minHourWeeklyHoliday").hide("slow");
    }
  });

  $("#hasMinTimeWeeklyHoliday").change(function () {
    if ($("#hasMinTimeWeeklyHoliday").is(":checked")) {
      $("#minTimeWeeklyHoliday").show("slow");
    } else {
      $("#minTimeWeeklyHoliday").hide("slow");
    }
  });

  // Weekly Holiday Allowance Section End




  // Religious Holiday Allowance Section Start

  $("#religiousHolidayAllowanceSection").hide();

  $("#hasReligiousHolidayAllowance").change(function () {
    if ($("#hasReligiousHolidayAllowance").is(":checked")) {
      $("#religiousHolidayAllowanceSection").show("slow");
      $("#minHourReligious").hide();
      $("#minTimeReligious").hide();
    } else {
      $("#religiousHolidayAllowanceSection").hide("slow");
    }
  });

  $("#hasMinHourReligious").change(function () {
    if ($("#hasMinHourReligious").is(":checked")) {
      $("#minHourReligious").show("slow");
    } else {
      $("#minHourReligious").hide("slow");
    }
  });

  $("#hasMinTimeReligious").change(function () {
    if ($("#hasMinTimeReligious").is(":checked")) {
      $("#minTimeReligious").show("slow");
    } else {
      $("#minTimeReligious").hide("slow");
    }
  });

  // Religious Holiday Allowance Section End




  // Other Holiday Allowance Section Start

  $("#otherHolidayAllowanceSection").hide();

  $("#hasOtherHolidayAllowance").change(function () {
    if ($("#hasOtherHolidayAllowance").is(":checked")) {
      $("#otherHolidayAllowanceSection").show("slow");
      $("#minHourOtherHoliday").hide();
      $("#minTimeOtherHoliday").hide();
    } else {
      $("#otherHolidayAllowanceSection").hide("slow");
    }
  });

  $("#hasMinHourOtherHoliday").change(function () {
    if ($("#hasMinHourOtherHoliday").is(":checked")) {
      $("#minHourOtherHoliday").show("slow");
    } else {
      $("#minHourOtherHoliday").hide("slow");
    }
  });

  $("#hasMinTimeOtherHoliday").change(function () {
    if ($("#hasMinTimeOtherHoliday").is(":checked")) {
      $("#minTimeOtherHoliday").show("slow");
    } else {
      $("#minTimeOtherHoliday").hide("slow");
    }
  });

  // Other Holiday Allowance Section End




//   Over Time Capping Start

  $("#maxAlowedHours").hide();

  $("#hasHourlyCapLimit").change(function () {
    if ($("#hasHourlyCapLimit").is(":checked")) {
      $("#maxAlowedHours").show("slow");
    } else {
      $("#maxAlowedHours").hide("slow");
    }
  });


  $("#maxAllowedDays").hide();

  $("#hasDailyCapLimit").change(function () {
    if ($("#hasDailyCapLimit").is(":checked")) {
      $("#maxAllowedDays").show("slow");
    } else {
      $("#maxAllowedDays").hide("slow");
    }
  });


  $("#maxBillAmount").hide();

  $("#hasBillAmountCapLimit").change(function () {
    if ($("#hasBillAmountCapLimit").is(":checked")) {
      $("#maxBillAmount").show("slow");
    } else {
      $("#maxBillAmount").hide("slow");
    }
  });


  $("#maxAllowedHours").hide();

  $("#hasHourCapLimit").change(function () {
    if ($("#hasHourCapLimit").is(":checked")) {
      $("#maxAllowedHours").show("slow");
    } else {
      $("#maxAllowedHours").hide("slow");
    }
  });


  $("#maxBillAmount2").hide();

  $("#hasBillAmountCapLimit2").change(function () {
    if ($("#hasBillAmountCapLimit2").is(":checked")) {
      $("#maxBillAmount2").show("slow");
    } else {
      $("#maxBillAmount2").hide("slow");
    }
  });
  
//   Over Time Capping End
}); 
