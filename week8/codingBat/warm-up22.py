def front_times(str, n):
  l = len(str)
  s = ""
  if l < 3:
    for i in range(0, n):
      s = s + str
  else:
    for i in range(0, n):
      s = s + str[:3]
      
  return s
