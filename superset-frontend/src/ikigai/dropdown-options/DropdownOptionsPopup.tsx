import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideDropdownOptions,
  selectActiveDropdown,
} from './dropdown-options-slice';
import { optionChosen } from './dropdown-options-middleware';

export function DropdownOptionsPopup() {
  const dispatch = useDispatch();
  const activeDropdown = useSelector(selectActiveDropdown);
  const ref = useRef<HTMLDivElement>(null);

  const visible = activeDropdown?.visible;
  const coords = activeDropdown?.coords;
  const selectedValues = activeDropdown?.selectedValues || [];
  const options = activeDropdown?.options || [];
  const searchTerm = activeDropdown?.searchTerm || '';
  const loading = activeDropdown?.isLoading;
  const id = activeDropdown?.id;

  useEffect(() => {
    if (visible && ref.current) ref.current.focus();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(hideDropdownOptions(id!));
      }
    };
    document.addEventListener('mousedown', handleClickOutside, true);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside, true);
  }, [visible, dispatch, id]);

  if (!visible || !coords) return null;

  const handleSelect = (option: string) => {
    dispatch(optionChosen(option));
    dispatch(hideDropdownOptions(id!));
  };

  const availableOptions = options
    .filter(opt => !selectedValues.includes(opt))
    .filter(opt => opt.includes(searchTerm));

  const popup = (
    <div
      className="ikigai-context-dropdown"
      role="listbox"
      ref={ref}
      style={{
        position: 'absolute',
        top: coords.y,
        left: coords.x,
        backgroundColor: '#fff',
        border: '1px solid #d9d9d9',
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 9999,
        minWidth: 160,
        fontFamily: 'system-ui, sans-serif',
      }}
      tabIndex={0}
    >
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              border: '3px solid #ccc',
              borderTop: '3px solid #7367f0',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: '4px 0',
            maxHeight: 240,
            overflowY: 'auto',
          }}
        >
          {availableOptions.map(opt => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              style={{
                padding: '5px 12px',
                cursor: 'pointer',
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={e =>
                ((e.target as HTMLElement).style.backgroundColor = '#f5f5f5')
              }
              onMouseLeave={e =>
                ((e.target as HTMLElement).style.backgroundColor =
                  'transparent')
              }
            >
              {opt}
            </li>
          ))}
          {availableOptions.length === 0 && (
            <li
              style={{
                padding: '5px 12px',
                color: '#999',
                fontStyle: 'italic',
              }}
            >
              No more options
            </li>
          )}
        </ul>
      )}
    </div>
  );

  return ReactDOM.createPortal(popup, document.body);
}
