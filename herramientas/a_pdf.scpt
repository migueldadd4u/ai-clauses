on run argv
  set inPath to POSIX file (item 1 of argv)
  set outPath to (item 2 of argv)
  set ext to (item 3 of argv)
  if ext is "pptx" then
    tell application "Microsoft PowerPoint"
      launch
      open inPath
      set d to active presentation
      save d in outPath as save as PDF
      close d saving no
    end tell
  else
    tell application "Microsoft Word"
      launch
      open inPath
      set d to active document
      save as d file name outPath file format format PDF
      close d saving no
    end tell
  end if
end run
