export const SHOW_DROPDOWN_OPTIONS = 'ikigai/dropdown-options/SHOW';
export const HIDE_DROPDOWN_OPTIONS = 'ikigai/dropdown-options/HIDE';
export const SET_DROPDOWN_OPTIONS = 'ikigai/dropdown-options/SET_OPTIONS';
export const SET_SELECTED_VALUES =
  'ikigai/dropdown-options/SET_SELECTED_VALUES';
export const SET_SEARCH_TERM = 'ikigai/dropdown-options/SET_SEARCH_TERM';
export const SET_DROPDOWN_LOADING = 'ikigai/dropdown-options/SET_LOADING';

export interface DropdownInfo {
  visible: boolean;
  coords: { x: number; y: number } | null;
  options: string[];
  selectedValues: string[];
  searchTerm: string;
  isLoading: boolean;
}

export interface DropdownOptionsState {
  activeDropdown: string | null;
  data: Record<string, DropdownInfo>;
}

const initialState: DropdownOptionsState = {
  activeDropdown: null,
  data: {},
};

type ShowDropdownOptionsAction = {
  type: typeof SHOW_DROPDOWN_OPTIONS;
  payload: { id: string; x: number; y: number };
};

type HideDropdownOptionsAction = {
  type: typeof HIDE_DROPDOWN_OPTIONS;
  payload: { id: string };
};

type SetDropdownOptionsAction = {
  type: typeof SET_DROPDOWN_OPTIONS;
  payload: { id: string; options: string[] };
};

type SetSelectedValuesAction = {
  type: typeof SET_SELECTED_VALUES;
  payload: { id: string; values: string[] };
};

type SetSearchTermAction = {
  type: typeof SET_SEARCH_TERM;
  payload: { id: string; term: string };
};

type SetDropdownLoadingAction = {
  type: typeof SET_DROPDOWN_LOADING;
  payload: { id: string; isLoading: boolean };
};

export type DropdownOptionsAction =
  | ShowDropdownOptionsAction
  | HideDropdownOptionsAction
  | SetDropdownOptionsAction
  | SetSelectedValuesAction
  | SetSearchTermAction
  | SetDropdownLoadingAction;

export function dropdownOptionsReducer(
  state: DropdownOptionsState = initialState,
  action: DropdownOptionsAction,
): DropdownOptionsState {
  switch (action.type) {
    case SHOW_DROPDOWN_OPTIONS: {
      const { id, x, y } = action.payload;
      return {
        activeDropdown: id,
        data: {
          ...state.data,
          [id]: {
            ...(state.data[id] ?? {
              visible: false,
              coords: null,
              options: [],
              selectedValues: [],
              searchTerm: '',
              isLoading: false,
            }),
            visible: true,
            coords: { x, y },
          },
        },
      };
    }

    case HIDE_DROPDOWN_OPTIONS: {
      const { id } = action.payload;
      if (!state.data[id]) return state;
      return {
        activeDropdown:
          state.activeDropdown === id ? null : state.activeDropdown,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            visible: false,
          },
        },
      };
    }

    case SET_DROPDOWN_OPTIONS: {
      const { id, options } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...(state.data[id] ?? {
              visible: false,
              coords: null,
              options: [],
              selectedValues: [],
              searchTerm: '',
              isLoading: false,
            }),
            options,
          },
        },
      };
    }

    case SET_SELECTED_VALUES: {
      const { id, values } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...(state.data[id] ?? {
              visible: false,
              coords: null,
              options: [],
              selectedValues: [],
              searchTerm: '',
              isLoading: false,
            }),
            selectedValues: values,
          },
        },
      };
    }

    case SET_SEARCH_TERM: {
      const { id, term } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...(state.data[id] ?? {
              visible: false,
              coords: null,
              options: [],
              selectedValues: [],
              searchTerm: '',
              isLoading: false,
            }),
            searchTerm: term,
          },
        },
      };
    }

    case SET_DROPDOWN_LOADING: {
      const { id, isLoading } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...(state.data[id] ?? {
              visible: false,
              coords: null,
              options: [],
              selectedValues: [],
              searchTerm: '',
              isLoading: false,
            }),
            isLoading,
          },
        },
      };
    }

    default:
      return state;
  }
}

export const showDropdownOptions = (
  id: string,
  x: number,
  y: number,
): ShowDropdownOptionsAction => ({
  type: SHOW_DROPDOWN_OPTIONS,
  payload: { id, x, y },
});

export const hideDropdownOptions = (id: string): HideDropdownOptionsAction => ({
  type: HIDE_DROPDOWN_OPTIONS,
  payload: { id },
});

export const setDropdownOptions = (
  id: string,
  options: string[],
): SetDropdownOptionsAction => ({
  type: SET_DROPDOWN_OPTIONS,
  payload: { id, options },
});

export const setSelectedValues = (
  id: string,
  values: string[],
): SetSelectedValuesAction => ({
  type: SET_SELECTED_VALUES,
  payload: { id, values },
});

export const setSearchTerm = (
  id: string,
  term: string,
): SetSearchTermAction => ({
  type: SET_SEARCH_TERM,
  payload: { id, term },
});

export const setDropdownLoading = (
  id: string,
  isLoading: boolean,
): SetDropdownLoadingAction => ({
  type: SET_DROPDOWN_LOADING,
  payload: { id, isLoading },
});

export const selectActiveDropdown = (state: {
  dropdownOptions?: DropdownOptionsState;
}): (DropdownInfo & { id: string }) | null => {
  const activeId = state.dropdownOptions?.activeDropdown;
  if (!activeId) return null;
  const dropdown = state.dropdownOptions?.data?.[activeId] ?? null;

  if (dropdown) {
    return {
      ...dropdown,
      id: state.dropdownOptions!.activeDropdown!,
    };
  }

  return null;
};
