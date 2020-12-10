import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

function DatePick(props) {
  const {show, onDismiss, dateFrom, dateTo, from, to, onContinue} = props;
  const modifiers = {start: from, end: to};

  const _handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, {from, to});
    dateFrom(range.from);
    dateTo(range.to);
  };

  return (
    <>
      <div
        className={`bottom-sheet-overlay ${show ? 'active' : ''}`}
        onClick={onDismiss}
      />
      <div
        className={`bottom-sheet bg-white px-3 py-4 ${show ? 'active' : ''}`}>
        <div className="text-center font-weight-bold">Filter By Date</div>

        <DayPicker
          className="Selectable my-2 w-100 border-0"
          numberOfMonths={1}
          selectedDays={[from, {from, to}]}
          modifiers={modifiers}
          onDayClick={_handleDayClick}
        />

        <div className="d-flex mx-4 justify-content-between my-2">
          <div className="">
            <div>From</div>

            <div className="font-weight-bold">
              {from ? moment(from).format('LL') : 'Choose Date'}
            </div>
          </div>

          <div className="">
            <div>To</div>

            <div className="font-weight-bold">
              {to ? moment(to).format('LL') : 'Choose Date'}
            </div>
          </div>
        </div>

        <button
          className="w-100 btn px-4 py-3 mt-3 rounded-14 bg-primary text-white"
          disabled={!from && !to}
          onClick={onContinue}>
          Apply
        </button>
      </div>
    </>
  );
}

export default DatePick;
