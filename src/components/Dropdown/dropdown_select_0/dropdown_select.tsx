import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import * as S from './S.dropdown_select'
import { useTheme } from '@emotion/react'
import { inject_styles } from '../../../types/emotion'

export type dropdownSelectStyles = {
  Main_Menu?: inject_styles
  Main?: inject_styles
  InputContainer?: inject_styles
  SearchContainer?: inject_styles
  Menu?: inject_styles
  Option?: inject_styles
}

export type dropdownSelectProps = {
  placeHolder?: string
  options: string[]
  Id?: string
  Class?: string
  isMulti?: boolean
  isSearchable?: boolean
  isCreable?: boolean
  onChange?: <i>(choice: i | i[]) => any
  styles?: dropdownSelectStyles
}

const CloseIcon = () => {
  return (
    <svg
      height='20'
      width='20'
      viewBox='0 0 20 20'
    >
      <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l -2,651-3,030-2,651 3,029c-0,469 0,469-1,229 0,469-1,697 0-0,469-0,469-0,469-1,229 0-1,697l2,758-3,15-2,759-3,152c-0,469-0,469-0,469 .228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
    </svg>
  )
}

export const DropdownSelect = ({
  placeHolder = 'placeholder',
  options = ['teste'],
  isMulti = false,
  isSearchable = false,
  isCreable = false,
  onChange = () => undefined,
  Id,
  Class,
  styles,
}: dropdownSelectProps) => {
  const Theme = useTheme()

  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] =
    useState<null | [] | string[] | string>(
      isMulti ? [] : null,
    )
  const [searchValue, setSearchValue] =
    useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchValue('')
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      inputRef.current &&
        !inputRef.current.contains(
          e.target as Node,
        ) &&
        setShowMenu(false)
    }
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  const onSearch = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(e.target.value)
  }

  const getOptions = () => {
    if (!searchValue) {
      return options
    }

    const filtered_options = options.filter(
      (option) =>
        option
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) >=
        0,
    )
    if (!isCreable) return filtered_options
    return filtered_options.length === 0
      ? [searchValue]
      : filtered_options
  }

  const removeOption = (
    option: string,
  ): string[] | string => {
    return Array.isArray(selectedValue)
      ? (selectedValue?.filter(
          (o) => o !== option,
        ) as string[])
      : option
  }

  const removeTag = (option: string) => {
    if (Array.isArray(selectedValue)) {
      const newValue = removeOption(option)
      setSelectedValue(newValue)
      onChange(newValue)
    }
  }

  const getDisplay = () => {
    if (
      !selectedValue ||
      (Array.isArray(selectedValue) &&
        selectedValue.length === 0)
    ) {
      return placeHolder
    }

    if (Array.isArray(selectedValue)) {
      return (
        <S.ContainerTags>
          {selectedValue.map((option, index) => (
            <S.Tag
              key={'tag_display__' + index}
              onClick={() =>
                handleOptionClick(option)
              }
              isActive={isSelected(option)}
            >
              {option}
              <S.RemoveTag
                onClick={() => removeTag(option)}
              >
                <CloseIcon />
              </S.RemoveTag>
            </S.Tag>
          ))}
        </S.ContainerTags>
      )
    }

    return Array.isArray(selectedValue)
      ? ''
      : selectedValue
  }

  const handleOptionClick = (option: string) => {
    let newValue
    if (Array.isArray(selectedValue)) {
      if (
        selectedValue?.findIndex(
          (o) => o === option,
        ) >= 0
      ) {
        newValue = removeOption(option)
      } else {
        newValue = [...selectedValue, option]
      }
    } else {
      newValue = option
    }
    setSelectedValue(newValue)
    onChange(newValue)
  }

  const isSelected = (option: string) => {
    if (!selectedValue) {
      return false
    } else if (Array.isArray(selectedValue)) {
      return (
        selectedValue.filter((o) => o === option)
          .length > 0
      )
    }

    return selectedValue === option
  }

  return (
    <S.Main
      id={Id}
      className={Class}
      showMenu={showMenu}
      styles={styles?.Main}
      _styles={styles?.Main_Menu}
    >
      <S.InputContainer
        ref={inputRef}
        onClick={() => setShowMenu(!showMenu)}
        styles={styles?.InputContainer}
      >
        <S.SelectedValue>
          {getDisplay()}
        </S.SelectedValue>
        <S.Tools>
          <S.Tool>
            <S.IconContainer>
              <AiFillCaretDown
                color={
                  showMenu
                    ? Theme.colors.primary
                    : 'white'
                }
              />
            </S.IconContainer>
          </S.Tool>
        </S.Tools>
      </S.InputContainer>
      {showMenu && (
        <S.Menu
          styles={styles?.Menu}
          _styles={styles?.Main_Menu}
        >
          {isSearchable && (
            <S.SearchContainer
              styles={styles?.SearchContainer}
            >
              <input
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
              />
            </S.SearchContainer>
          )}
          {getOptions().map((option, index) => (
            <S.Option
              styles={styles?.Option}
              key={'search_values' + index}
              onClick={() =>
                handleOptionClick(option)
              }
              isActive={isSelected(option)}
            >
              {option}
            </S.Option>
          ))}
        </S.Menu>
      )}
    </S.Main>
  )
}
