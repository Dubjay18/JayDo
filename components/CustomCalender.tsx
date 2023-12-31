import React, { useRef, useCallback } from "react";
import { StyleSheet } from "react-native";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import testIDs from "../testIDs";
import Colors from "../constants/Colors";
import {
  agendaItems,
  getMarkedDates,
} from "../mock/agendaItems";
// // import AgendaItem from '../mocks/AgendaItem';
// import {getTheme, themeColor, lightThemeColor} from '../mocks/theme';

// const leftArrowIcon = require("../img/previous.png");
// const rightArrowIcon = require("../img/next.png");
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const CustomCalendar = (props: Props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  //   const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: Colors.dark.tint,
  });

  const onDateChanged = useCallback(
    (date: any, updateSource: any) => {
      console.log(
        "ExpandableCalendarScreen onDateChanged: ",
        date,
        updateSource
      );
    },
    []
  );

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  //   const renderItem = useCallback(({item}: any) => {
  //     return <AgendaItem item={item}/>;
  //   }, []);

  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
      onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      showTodayButton
      // disabledOpacity={0.6}
      theme={{
        calendarBackground: Colors.dark.background,
        textSectionTitleColor: Colors.dark.text,
        dayTextColor: Colors.dark.text,
      }}

      //   style={{ backgroundColor: Colors.dark.background }}
      // todayBottomMargin={16}
    >
      {/* {weekView ? ( */}
      <WeekCalendar
        testID={testIDs.weekCalendar.CONTAINER}
        firstDay={1}
        markedDates={marked.current}
        style={{ backgroundColor: Colors.dark.background }}
        theme={{
          calendarBackground: Colors.dark.background,
          textSectionTitleColor: Colors.dark.text,
          dayTextColor: Colors.dark.text,
          selectedDayBackgroundColor: Colors.dark.tint,
          selectedDayTextColor: Colors.dark.text,
          arrowColor: Colors.dark.tint,
        }}
      />
      {/* ) : ( */}
      {/* <ExpandableCalendar
          testID={testIDs.expandableCalendar.CONTAINER}
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
          theme={theme.current}
          // disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={marked.current}
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
          // animateScroll
          // closeOnDayPress={false}
        />
      )} */}
      {/* <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section}
        // dayFormat={'yyyy-MM-d'}
      /> */}
    </CalendarProvider>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: "lightgrey",
  },
  section: {
    backgroundColor: Colors.dark.background,
    color: "grey",
    textTransform: "capitalize",
  },
});
