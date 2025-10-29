import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import { Moment } from 'moment';

import {
  selectDatepickerVisible,
  selectDatepickerCoords,
  hideDatepicker,
} from './datepicker-slice';
import { dateSelected } from './datepicker-middleware';

/**
 * Standalone calendar display; the popup that appears when click on a Datepicker.
 *
 * The child custom element iframes instruct this process when and where to render
 * this component. For more info on how and why, see `datepicker-middleware.ts`
 */
export function DatepickerPopup() {
  const dispatch = useDispatch();
  const visible = useSelector(selectDatepickerVisible);
  const coords = useSelector(selectDatepickerCoords);

  if (!visible || !coords) return null;

  const handleChange = (value: Moment | null) => {
    dispatch(dateSelected(value ? value.toISOString() : null));
    dispatch(hideDatepicker());
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) dispatch(dateSelected(null));
  };

  const onBlur = () => {
    dispatch(hideDatepicker());
  };

  const popup = (
    <DatePicker
      autoFocus
      open={visible}
      style={{
        height: 0,
        opacity: 0,
        top: coords.y,
        left: coords.x,
        position: 'absolute',
        zIndex: 1,
      }}
      dropdownAlign={{
        offset: [0, -10],
      }}
      popupStyle={{
        zIndex: 1,
      }}
      onBlur={onBlur}
      dropdownClassName="ikigai-context-datepicker"
      onChange={handleChange}
      onOpenChange={handleOpenChange}
    />
  );

  return ReactDOM.createPortal(popup, document.body);
}
