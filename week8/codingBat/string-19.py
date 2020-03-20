def combo_string(a, b):
  n = len(a)
  m = len(b)
  if n>m:
    return b+a+b
  else:
    return a+b+a
