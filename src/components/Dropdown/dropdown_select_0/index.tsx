import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import * as S from './styles'
import { useTheme } from '@emotion/react'
import { AiOutlineClose } from 'react-icons/ai'

export type dropdownSelectProps = {
  placeHolder?: string
  options: string[]
  Id?: string
  Class?: string
  isMulti?: boolean
  isSearchable?: boolean
  isCreable?: boolean
  onChange?: <i>(choice: i | i[]) => any
}

const CloseIcon = () => {
  return <AiOutlineClose />
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
}: dropdownSelectProps) => {
  const theme = useTheme()

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
    >
      <S.InputContainer
        ref={inputRef}
        onClick={() => setShowMenu(!showMenu)}
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
                    ? theme.colors.primary[2]
                    : theme.colors.black[5]
                }
              />
            </S.IconContainer>
          </S.Tool>
        </S.Tools>
      </S.InputContainer>
      {showMenu && (
        <S.Menu>
          {isSearchable && (
            <S.SearchContainer>
              <input
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
              />
            </S.SearchContainer>
          )}
          {getOptions().map((option, index) => (
            <S.Option
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
