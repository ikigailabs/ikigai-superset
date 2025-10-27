import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';

import {
  selectDatepickerVisible,
  selectDatepickerCoords,
} from './datepicker-slice';
import { dateSelected } from './datepicker-middleware';

/**
 * Renders a floating AntD DatePicker popup at the given coordinates.
 * Compatible with AntD 4.x and React 16.
 */
export function DatepickerPopup() {
  const dispatch = useDispatch();
  // const visible = useSelector(selectDatepickerVisible);
  // const coords = useSelector(selectDatepickerCoords);

  // if (!visible || !coords) return null;
  console.log('saniy');

  const handleChange = (value: Moment | null) => {
    dispatch(dateSelected(value ? value.toISOString() : null));
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) dispatch(dateSelected(null));
  };

  const popup = (
    <div
      style={{
        position: 'absolute',
        // top: coords.y,
        // left: coords.x,
        top: 500,
        left: 500,
        zIndex: 9999,
        background: '#fff',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        borderRadius: 4,
        padding: 8,
      }}
    >
      <DatePicker
        autoFocus
        open
        onChange={handleChange}
        onOpenChange={handleOpenChange}
        getPopupContainer={trigger => trigger.parentElement || document.body}
      />
    </div>
  );

  return ReactDOM.createPortal(popup, document.body);
}
